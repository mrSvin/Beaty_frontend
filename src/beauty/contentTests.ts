export type TestAnswer = {
  value: string;
  label: string;
  scores?: Record<string, number>;
};

export type TestQuestion = {
  id: string;
  question: string;
  answers: TestAnswer[];
};

export type TestResult = {
  title: string;
  description: string;
  tips: string[];
  link: string;
  linkLabel: string;
  note?: string;
};

export type BeautyTest = {
  slug: string;
  title: string;
  description: string;
  questions: TestQuestion[];
  getResult: (answers: Record<string, string>) => TestResult;
};

const sumScores = (test: BeautyTest, answers: Record<string, string>) => {
  const totals: Record<string, number> = {};

  test.questions.forEach((question) => {
    const answer = question.answers.find((item) => item.value === answers[question.id]);
    Object.entries(answer?.scores ?? {}).forEach(([key, value]) => {
      totals[key] = (totals[key] ?? 0) + value;
    });
  });

  return totals;
};

const topScore = (scores: Record<string, number>, fallback: string) =>
  Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? fallback;

const skinTypeQuestions: TestQuestion[] = [
  {
    id: 'after-wash',
    question: 'Как кожа обычно чувствует себя через 10–20 минут после умывания без крема?',
    answers: [
      { value: 'comfortable', label: 'Комфортно, без заметных изменений', scores: { normal: 2 } },
      { value: 'tight', label: 'Есть стянутость или хочется скорее нанести крем', scores: { dry: 3 } },
      { value: 'shine', label: 'Довольно быстро появляется блеск', scores: { oily: 3 } },
      { value: 'mixed', label: 'Щёки суше, а лоб, нос или подбородок комфортнее', scores: { combination: 3 } },
    ],
  },
  {
    id: 'midday',
    question: 'Что чаще происходит с кожей к середине дня?',
    answers: [
      { value: 'stable', label: 'Состояние почти не меняется', scores: { normal: 2 } },
      { value: 'dry', label: 'Появляется сухость, шероховатость или стянутость', scores: { dry: 3 } },
      { value: 'oily', label: 'Блестит большая часть лица', scores: { oily: 3 } },
      { value: 't-zone', label: 'Блестит в основном T-зона, а щёки остаются суше', scores: { combination: 3 } },
    ],
  },
  {
    id: 'pores',
    question: 'Как обычно выглядят поры без макияжа?',
    answers: [
      { value: 'small', label: 'В основном малозаметны', scores: { dry: 1, normal: 2 } },
      { value: 'visible-all', label: 'Заметны на многих участках лица', scores: { oily: 2 } },
      { value: 'visible-t', label: 'Заметнее на носу и в T-зоне', scores: { combination: 2 } },
      { value: 'varies', label: 'Сильно зависит от участка и состояния кожи', scores: { combination: 1, sensitive: 1 } },
    ],
  },
  {
    id: 'cream',
    question: 'Как кожа относится к насыщенным кремам?',
    answers: [
      { value: 'likes', label: 'Обычно становится комфортнее и мягче', scores: { dry: 2 } },
      { value: 'neutral', label: 'Подходят, если нанести немного', scores: { normal: 2 } },
      { value: 'heavy', label: 'Часто кажутся тяжёлыми и усиливают блеск', scores: { oily: 2 } },
      { value: 'zones', label: 'На щеках комфортно, а в T-зоне тяжеловато', scores: { combination: 3 } },
    ],
  },
  {
    id: 'flaking',
    question: 'Как часто заметно шелушение без очевидной причины?',
    answers: [
      { value: 'often', label: 'Регулярно', scores: { dry: 3, sensitive: 1 } },
      { value: 'sometimes', label: 'Иногда, например после активного ухода или холода', scores: { dry: 1, sensitive: 1 } },
      { value: 'rare', label: 'Редко', scores: { normal: 2, oily: 1 } },
      { value: 'cheeks', label: 'В основном на щеках или по краям лица', scores: { combination: 2 } },
    ],
  },
  {
    id: 'reactivity',
    question: 'Как часто кожа краснеет, щиплет или явно реагирует на новое средство?',
    answers: [
      { value: 'often', label: 'Часто даже при аккуратном введении', scores: { sensitive: 4 } },
      { value: 'sometimes', label: 'Иногда, особенно на активные формулы', scores: { sensitive: 2 } },
      { value: 'rare', label: 'Редко', scores: { normal: 1, oily: 1, dry: 1, combination: 1 } },
      { value: 'only-irritants', label: 'В основном после слишком агрессивного ухода', scores: { sensitive: 1 } },
    ],
  },
  {
    id: 'makeup',
    question: 'Как тональное средство обычно ведёт себя через несколько часов?',
    answers: [
      { value: 'even', label: 'Выглядит примерно так же, как после нанесения', scores: { normal: 2 } },
      { value: 'dry-patches', label: 'Подчёркивает сухие участки', scores: { dry: 2 } },
      { value: 'shiny', label: 'Быстро начинает блестеть или хуже держится', scores: { oily: 2 } },
      { value: 'mixed', label: 'В T-зоне блестит, а на щеках может подчёркивать сухость', scores: { combination: 3 } },
    ],
  },
  {
    id: 'season',
    question: 'Насколько состояние кожи меняется по сезонам?',
    answers: [
      { value: 'little', label: 'Незначительно', scores: { normal: 2 } },
      { value: 'winter-dry', label: 'Зимой заметно суше и чувствительнее', scores: { dry: 2 } },
      { value: 'summer-oily', label: 'В тепле заметно жирнее', scores: { oily: 2 } },
      { value: 'zones-change', label: 'Разные зоны меняются по-разному', scores: { combination: 2 } },
    ],
  },
];

const skinTypeResults: Record<string, TestResult> = {
  dry: {
    title: 'Ваш ориентир — кожа, склонная к сухости',
    description: 'По ответам коже чаще не хватает комфорта и липидной поддержки: после очищения может появляться стянутость, а насыщенные текстуры обычно воспринимаются хорошо.',
    tips: ['использовать мягкое очищение без выраженной стянутости', 'добавить увлажняющий крем с комфортной для вас текстурой', 'не перегружать схему несколькими раздражающими активами сразу', 'днём использовать фотозащиту по условиям пребывания на солнце'],
    link: '/category/skin/suhaya-kozha',
    linkLabel: 'Материалы для сухой кожи',
    note: 'Это бытовой ориентир, а не медицинская диагностика состояния кожи.',
  },
  oily: {
    title: 'Ваш ориентир — кожа, склонная к жирности',
    description: 'По ответам блеск появляется на большей части лица, а плотные текстуры могут ощущаться тяжёлыми. Это не означает, что увлажнение нужно исключать.',
    tips: ['выбирать мягкое, но регулярное очищение', 'пробовать лёгкие увлажняющие текстуры', 'активы добавлять по одной задаче и оценивать реакцию', 'не пытаться полностью обезжиривать кожу агрессивным очищением'],
    link: '/category/skin/zhirnaya-kozha',
    linkLabel: 'Материалы для жирной кожи',
  },
  combination: {
    title: 'Ваш ориентир — комбинированная кожа',
    description: 'По ответам разные зоны лица ведут себя по-разному: T-зона чаще становится жирнее, а щёки остаются нормальными или склонными к сухости.',
    tips: ['использовать мягкое очищение на всё лицо', 'подбирать базовое увлажнение без ощущения тяжести', 'при необходимости наносить более насыщенный крем только на сухие зоны', 'активы выбирать под конкретную задачу, а не под всё лицо сразу'],
    link: '/category/skin/kombinirovannaya-kozha',
    linkLabel: 'Материалы для комбинированной кожи',
  },
  sensitive: {
    title: 'Главный ориентир — повышенная реактивность кожи',
    description: 'В ваших ответах чаще всего повторяются покраснение, жжение или дискомфорт от новых средств. В такой ситуации важнее сначала сделать уход предсказуемым и мягким, а уже потом добавлять активы.',
    tips: ['оставить простую базу из очищения и увлажнения', 'новые продукты вводить по одному', 'избегать одновременного старта нескольких сильных активов', 'при стойком раздражении или выраженных симптомах обратиться к врачу'],
    link: '/category/skin/chuvstvitelnaya-kozha',
    linkLabel: 'Материалы для чувствительной кожи',
    note: 'Реактивность может встречаться при любом типе кожи и сама по себе не является диагнозом.',
  },
  normal: {
    title: 'Ваш ориентир — сбалансированная кожа',
    description: 'По ответам кожа большую часть времени остаётся комфортной: без выраженной сухости, постоянного блеска или сильной разницы между зонами.',
    tips: ['сохранить мягкое очищение', 'использовать комфортное базовое увлажнение', 'не усложнять уход без конкретной задачи', 'активы добавлять только при понятной цели'],
    link: '/guides/bazovyy-uhod',
    linkLabel: 'Как построить базовый уход',
  },
};

const routineQuestions: TestQuestion[] = [
  {
    id: 'skin-feel',
    question: 'Как кожа ведёт себя большую часть недели?',
    answers: [
      { value: 'dry', label: 'Часто стягивается или шелушится' },
      { value: 'oily', label: 'Быстро появляется блеск' },
      { value: 'combo', label: 'T-зона жирнее, щёки суше' },
      { value: 'balanced', label: 'В целом комфортно и стабильно' },
    ],
  },
  {
    id: 'goal',
    question: 'Какая задача сейчас для вас самая важная?',
    answers: [
      { value: 'comfort', label: 'Уменьшить сухость и дискомфорт' },
      { value: 'blemishes', label: 'Уменьшить высыпания и забитые поры' },
      { value: 'tone', label: 'Сделать тон визуально более ровным' },
      { value: 'basic', label: 'Просто собрать понятную базовую схему' },
    ],
  },
  {
    id: 'sensitivity',
    question: 'Насколько легко кожа раздражается от новых средств?',
    answers: [
      { value: 'high', label: 'Часто реагирует покраснением или жжением' },
      { value: 'medium', label: 'Иногда реагирует на активные формулы' },
      { value: 'low', label: 'Обычно переносит новые средства спокойно' },
      { value: 'unknown', label: 'Пока не могу оценить' },
    ],
  },
  {
    id: 'current',
    question: 'Сколько этапов уже есть в вашем ежедневном уходе?',
    answers: [
      { value: 'none', label: 'Почти ничего не использую' },
      { value: 'two', label: 'Очищение и крем' },
      { value: 'three', label: 'Есть база и одно дополнительное средство' },
      { value: 'many', label: 'Использую много средств и активов' },
    ],
  },
  {
    id: 'time',
    question: 'Какой формат ухода вам реально удобно поддерживать каждый день?',
    answers: [
      { value: 'minimal', label: '2–3 коротких шага' },
      { value: 'standard', label: '3–4 шага утром и вечером' },
      { value: 'extended', label: 'Готов(а) к более подробной схеме' },
      { value: 'different', label: 'Минимум утром, больше времени вечером' },
    ],
  },
  {
    id: 'active-experience',
    question: 'Какой у вас опыт с активными ингредиентами?',
    answers: [
      { value: 'none', label: 'Почти не использовал(а)' },
      { value: 'basic', label: 'Пробовал(а) один актив и понимаю реакцию кожи' },
      { value: 'several', label: 'Регулярно использую несколько активов' },
      { value: 'overload', label: 'Бывало раздражение из-за слишком сложной схемы' },
    ],
  },
];

const getRoutineResult = (answers: Record<string, string>): TestResult => {
  const goal = answers.goal ?? 'basic';
  const skinFeel = answers['skin-feel'] ?? 'balanced';
  const sensitive = answers.sensitivity === 'high' || answers['active-experience'] === 'overload';
  const minimal = answers.time === 'minimal' || answers.current === 'none';

  const baseBySkin: Record<string, string> = {
    dry: 'крем с более питательной текстурой',
    oily: 'лёгкий увлажняющий крем или гель-крем',
    combo: 'лёгкое увлажнение на всё лицо и более насыщенная текстура только на сухие зоны',
    balanced: 'комфортный базовый увлажняющий крем',
  };

  const goalTip: Record<string, string> = {
    comfort: 'Сначала сосредоточьтесь на комфорте кожи и восстановлении простой базы; активы можно добавить позже.',
    blemishes: 'После стабильной базы добавьте только один продукт, направленный на высыпания или забитые поры, и оцените переносимость.',
    tone: 'После базы выберите один продукт для визуального выравнивания тона и не вводите несколько активов одновременно.',
    basic: 'На старте достаточно понятной базы без обязательных сывороток, тоников и масок.',
  };

  const goalLink: Record<string, [string, string]> = {
    comfort: ['/category/skin/uvlazhnenie', 'Материалы про увлажнение'],
    blemishes: ['/category/skin/problemnaya-kozha', 'Материалы для проблемной кожи'],
    tone: ['/category/skin/pigmentaciya', 'Материалы про неровный тон'],
    basic: ['/guides/bazovyy-uhod', 'Гайд по базовому уходу'],
  };

  const [link, linkLabel] = goalLink[goal] ?? goalLink.basic;

  return {
    title: sensitive ? 'Вам подойдёт короткая и щадящая схема' : minimal ? 'Вам подойдёт минималистичная базовая схема' : 'Вам подойдёт базовая схема с одним целевым этапом',
    description: sensitive
      ? 'По ответам коже важнее предсказуемость и хорошая переносимость, чем количество активов. Соберите устойчивую базу и меняйте по одному продукту за раз.'
      : 'Схема может оставаться простой: базовые этапы ежедневно, а дополнительное средство — только под главную задачу.',
    tips: [
      'утром: мягкое очищение по необходимости → увлажнение → фотозащита по условиям дня',
      `вечером: очищение → ${baseBySkin[skinFeel] ?? baseBySkin.balanced}`,
      goalTip[goal] ?? goalTip.basic,
      sensitive ? 'новые активы вводите по одному и прекращайте использование при стойком раздражении' : 'оценивайте новый этап несколько недель, прежде чем усложнять схему',
    ],
    link,
    linkLabel,
  };
};

const compatibilityQuestions: TestQuestion[] = [
  {
    id: 'first',
    question: 'Какой первый актив вы хотите использовать?',
    answers: [
      { value: 'retinoid', label: 'Ретиноид' },
      { value: 'acids', label: 'AHA/BHA-кислоты' },
      { value: 'vitamin-c', label: 'Витамин C' },
      { value: 'niacinamide', label: 'Ниацинамид' },
      { value: 'azelaic', label: 'Азелаиновая кислота' },
      { value: 'peptides', label: 'Пептиды' },
    ],
  },
  {
    id: 'second',
    question: 'С каким вторым активом вы хотите его сочетать?',
    answers: [
      { value: 'retinoid', label: 'Ретиноид' },
      { value: 'acids', label: 'AHA/BHA-кислоты' },
      { value: 'vitamin-c', label: 'Витамин C' },
      { value: 'niacinamide', label: 'Ниацинамид' },
      { value: 'azelaic', label: 'Азелаиновая кислота' },
      { value: 'peptides', label: 'Пептиды' },
    ],
  },
  {
    id: 'sensitivity',
    question: 'Как кожа обычно реагирует на активные средства?',
    answers: [
      { value: 'high', label: 'Легко краснеет, щиплет или пересушивается' },
      { value: 'medium', label: 'Иногда бывает реакция, если средств много' },
      { value: 'low', label: 'Обычно переносит активы спокойно' },
      { value: 'new', label: 'Я только начинаю пользоваться активами' },
    ],
  },
  {
    id: 'usage',
    question: 'Как вы планируете использовать эту пару?',
    answers: [
      { value: 'same', label: 'Наносить подряд в одном уходе' },
      { value: 'am-pm', label: 'Разделить на утро и вечер' },
      { value: 'alternate', label: 'Использовать в разные дни' },
      { value: 'unsure', label: 'Пока не решил(а)' },
    ],
  },
];

const activeNames: Record<string, string> = {
  retinoid: 'ретиноид',
  acids: 'AHA/BHA-кислоты',
  'vitamin-c': 'витамин C',
  niacinamide: 'ниацинамид',
  azelaic: 'азелаиновая кислота',
  peptides: 'пептиды',
};

const demandingPairs = new Set([
  'acids|retinoid',
  'acids|vitamin-c',
  'acids|azelaic',
  'retinoid|vitamin-c',
  'retinoid|azelaic',
]);

const getPairKey = (a: string, b: string) => [a, b].sort().join('|');

const getCompatibilityResult = (answers: Record<string, string>): TestResult => {
  const first = answers.first ?? 'niacinamide';
  const second = answers.second ?? 'peptides';
  const same = first === second;
  const demanding = demandingPairs.has(getPairKey(first, second));
  const sensitive = answers.sensitivity === 'high' || answers.sensitivity === 'new';
  const layered = answers.usage === 'same';
  const firstName = activeNames[first] ?? 'первый актив';
  const secondName = activeNames[second] ?? 'второй актив';

  if (same) {
    return {
      title: 'Это один и тот же актив — дублировать его не нужно',
      description: `Вы выбрали ${firstName} дважды. Два средства с одним активом в одной схеме не обязательно дадут лучший результат, зато могут увеличить нагрузку на кожу.`,
      tips: ['оставьте одно средство с понятной концентрацией и формулой', 'оцените переносимость до добавления других активов', 'проверяйте инструкцию конкретного продукта', 'при раздражении сократите частоту или сделайте паузу'],
      link: '/ingredients',
      linkLabel: 'Энциклопедия ингредиентов',
    };
  }

  if (demanding && (sensitive || layered)) {
    return {
      title: 'Эту пару лучше не наслаивать сразу в одном уходе',
      description: `${firstName} и ${secondName} могут встречаться в одной общей схеме, но при чувствительной коже или одновременном нанесении вероятность раздражения выше. Безопаснее развести их по времени и сначала проверить каждый отдельно.`,
      tips: ['вводите каждый актив отдельно и постепенно', 'при необходимости разделите продукты на разные дни или утро/вечер', 'не добавляйте параллельно ещё один сильный актив', 'ориентируйтесь на инструкцию производителя и реакцию кожи'],
      link: '/guides/kak-chitat-sostav',
      linkLabel: 'Как читать состав косметики',
      note: 'Совместимость зависит не только от названия ингредиента, но и от концентрации, pH и всей формулы продукта.',
    };
  }

  if (demanding) {
    return {
      title: 'Сочетание возможно, но лучше разделить активы',
      description: `${firstName} и ${secondName} не обязательно исключают друг друга, однако такая пара может быть слишком активной при одновременном нанесении. Практичнее использовать их в разное время и следить за переносимостью.`,
      tips: ['начните с одного продукта и добавляйте второй после периода адаптации', 'разделите активы на разные дни или утро/вечер', 'сохраняйте базовое увлажнение', 'сократите частоту при сухости, жжении или стойком покраснении'],
      link: '/ingredients',
      linkLabel: 'Подробнее об ингредиентах',
    };
  }

  return {
    title: 'Сочетание обычно можно встроить в одну схему',
    description: `${firstName} и ${secondName} не относятся к комбинациям, которые обычно приходится жёстко разводить. Но переносимость всё равно зависит от конкретных формул и состояния кожи.`,
    tips: ['не вводите оба новых продукта в один день', 'проверьте рекомендации на упаковке каждого средства', 'оставьте в схеме базовое увлажнение', 'если появляется раздражение, сократите частоту и упростите уход'],
    link: '/ingredients',
    linkLabel: 'Энциклопедия ингредиентов',
  };
};

const hairPorosityQuestions: TestQuestion[] = [
  {
    id: 'wetting',
    question: 'Как быстро волосы полностью намокают под душем?',
    answers: [
      { value: 'slow', label: 'Вода как будто долго остаётся на поверхности', scores: { low: 3 } },
      { value: 'medium', label: 'Намокают постепенно и равномерно', scores: { medium: 3 } },
      { value: 'fast', label: 'Очень быстро пропитываются водой', scores: { high: 3 } },
      { value: 'different', label: 'Корни и длина ведут себя по-разному', scores: { medium: 1, high: 1 } },
    ],
  },
  {
    id: 'drying',
    question: 'Как долго волосы сохнут без фена?',
    answers: [
      { value: 'long', label: 'Долго, влага держится внутри', scores: { low: 2 } },
      { value: 'average', label: 'Обычное время для моей длины и густоты', scores: { medium: 2 } },
      { value: 'fast', label: 'Довольно быстро теряют влагу', scores: { high: 2 } },
      { value: 'ends-fast', label: 'Кончики сохнут заметно быстрее корней', scores: { high: 2 } },
    ],
  },
  {
    id: 'products',
    question: 'Как длина реагирует на насыщенные маски и масла?',
    answers: [
      { value: 'heavy', label: 'Легко утяжеляется и теряет объём', scores: { low: 3 } },
      { value: 'good', label: 'Становится мягче без сильного утяжеления', scores: { medium: 3 } },
      { value: 'absorbs', label: 'Быстро «съедает» уход и снова кажется сухой', scores: { high: 3 } },
      { value: 'depends', label: 'Зависит от участка длины', scores: { medium: 1, high: 1 } },
    ],
  },
  {
    id: 'frizz',
    question: 'Как волосы ведут себя во влажную погоду?',
    answers: [
      { value: 'stable', label: 'Почти не меняются', scores: { low: 2 } },
      { value: 'little', label: 'Немного пушатся, но быстро укладываются', scores: { medium: 2 } },
      { value: 'strong', label: 'Сильно пушатся или быстро теряют форму', scores: { high: 3 } },
      { value: 'curl', label: 'Становятся более волнистыми или завиваются сильнее', scores: { medium: 1, high: 2 } },
    ],
  },
  {
    id: 'damage',
    question: 'Есть ли на длине осветление, частое окрашивание или регулярная горячая укладка?',
    answers: [
      { value: 'none', label: 'Почти нет', scores: { low: 1, medium: 1 } },
      { value: 'some', label: 'Иногда окрашиваю или укладываю горячими инструментами', scores: { medium: 2 } },
      { value: 'much', label: 'Да, длина регулярно подвергается таким воздействиям', scores: { high: 3 } },
      { value: 'ends', label: 'В основном повреждены кончики', scores: { high: 2 } },
    ],
  },
  {
    id: 'texture',
    question: 'Какая длина на ощупь после обычного шампуня без кондиционера?',
    answers: [
      { value: 'smooth', label: 'Довольно гладкая', scores: { low: 2 } },
      { value: 'normal', label: 'Слегка шероховатая, но управляемая', scores: { medium: 2 } },
      { value: 'rough', label: 'Шероховатая, цепляется и путается', scores: { high: 3 } },
      { value: 'mixed', label: 'У корней гладкая, концы заметно грубее', scores: { high: 2 } },
    ],
  },
  {
    id: 'leave-in',
    question: 'Как долго ощущается эффект несмываемого ухода?',
    answers: [
      { value: 'too-much', label: 'Даже небольшое количество долго чувствуется на волосах', scores: { low: 2 } },
      { value: 'day', label: 'Обычно хватает до следующего мытья', scores: { medium: 2 } },
      { value: 'short', label: 'Через несколько часов длина снова кажется сухой', scores: { high: 3 } },
      { value: 'not-use', label: 'Не использую несмываемый уход', scores: { medium: 1 } },
    ],
  },
];

const hairResults: Record<string, TestResult> = {
  low: {
    title: 'Ваш ориентир — низкая пористость',
    description: 'По ответам волосы медленнее впитывают воду и уход, а насыщенные продукты могут легко их утяжелять. Обычно лучше работают умеренные количества и более лёгкие текстуры.',
    tips: ['начинайте с небольшого количества кондиционера или маски', 'не наслаивайте несколько тяжёлых несмываемых средств', 'распределяйте уход по длине равномерно', 'оценивайте результат по мягкости и управляемости, а не по количеству продукта'],
    link: '/category/hair/poristye-volosy',
    linkLabel: 'Гид по пористости волос',
  },
  medium: {
    title: 'Ваш ориентир — средняя пористость',
    description: 'По ответам волосы достаточно предсказуемо принимают влагу и удерживают эффект ухода. Обычно можно гибко менять текстуры по сезону и состоянию длины.',
    tips: ['оставьте базовый кондиционер после мытья', 'маску используйте по состоянию длины, а не по жёсткому расписанию', 'несмываемый уход подбирайте по плотности волос', 'после окрашивания или горячей укладки временно усиливайте защиту длины'],
    link: '/category/hair/poristye-volosy',
    linkLabel: 'Гид по пористости волос',
  },
  high: {
    title: 'Ваш ориентир — высокая пористость',
    description: 'По ответам длина быстро намокает и теряет влагу, сильнее пушится или чувствует последствия окрашивания и горячей укладки. Ей чаще нужен регулярный кондиционирующий и защитный уход.',
    tips: ['используйте кондиционер после каждого мытья длины', 'добавьте несмываемый продукт, если он уменьшает спутывание', 'снижайте лишнее трение и перегрев при сушке', 'особенно внимательно ухаживайте за осветлёнными и повреждёнными концами'],
    link: '/category/hair/poristye-volosy',
    linkLabel: 'Гид по пористости волос',
  },
};

const cosmeticsUsageQuestions: TestQuestion[] = [
  {
    id: 'product',
    question: 'Для какого средства рассчитать примерный расход?',
    answers: [
      { value: 'serum', label: 'Сыворотка для лица' },
      { value: 'cream', label: 'Крем для лица' },
      { value: 'cleanser', label: 'Гель или пенка для умывания' },
      { value: 'toner', label: 'Тонер или жидкий тоник' },
    ],
  },
  {
    id: 'volume',
    question: 'Какой объём упаковки?',
    answers: [
      { value: '15', label: '15 мл' },
      { value: '30', label: '30 мл' },
      { value: '50', label: '50 мл' },
      { value: '100', label: '100 мл' },
    ],
  },
  {
    id: 'frequency',
    question: 'Как часто вы используете это средство?',
    answers: [
      { value: 'twice', label: '2 раза в день' },
      { value: 'daily', label: '1 раз в день' },
      { value: 'four-week', label: 'Примерно 4 раза в неделю' },
      { value: 'two-week', label: 'Примерно 2 раза в неделю' },
    ],
  },
  {
    id: 'amount',
    question: 'Сколько средства обычно уходит за одно применение?',
    answers: [
      { value: 'small', label: 'Небольшое количество' },
      { value: 'standard', label: 'Среднее количество' },
      { value: 'generous', label: 'Наношу довольно щедро' },
      { value: 'unknown', label: 'Не знаю — использовать среднюю оценку' },
    ],
  },
];

const productUseMl: Record<string, number> = {
  serum: 0.25,
  cream: 0.5,
  cleanser: 1,
  toner: 1.5,
};

const productNames: Record<string, string> = {
  serum: 'сыворотки',
  cream: 'крема для лица',
  cleanser: 'средства для умывания',
  toner: 'тонера или тоника',
};

const usePerDay: Record<string, number> = {
  twice: 2,
  daily: 1,
  'four-week': 4 / 7,
  'two-week': 2 / 7,
};

const amountMultiplier: Record<string, number> = {
  small: 0.7,
  standard: 1,
  generous: 1.35,
  unknown: 1,
};

const getCosmeticsUsageResult = (answers: Record<string, string>): TestResult => {
  const product = answers.product ?? 'serum';
  const volume = Number(answers.volume ?? 30);
  const frequency = usePerDay[answers.frequency ?? 'daily'] ?? 1;
  const amount = amountMultiplier[answers.amount ?? 'standard'] ?? 1;
  const perUse = productUseMl[product] ?? 0.5;
  const days = Math.max(1, Math.round(volume / (perUse * frequency * amount)));
  const weeks = Math.max(1, Math.round(days / 7));
  const months = days / 30.4;
  const timeLabel = days < 60 ? `${weeks} нед.` : `${months.toFixed(1).replace('.', ',')} мес.`;

  return {
    title: `Упаковки хватит примерно на ${timeLabel}`,
    description: `Для ${productNames[product] ?? 'средства'} объёмом ${volume} мл расчёт даёт около ${days} дней использования при выбранной частоте и примерном количестве за одно нанесение.`,
    tips: ['это ориентировочный расчёт: дозаторы и текстуры сильно отличаются', 'если расход заметно выше, сравните фактическое число применений за неделю', 'для средств с отдельными требованиями к количеству ориентируйтесь на инструкцию производителя', 'удобно записать дату открытия упаковки и сравнить с расчётом'],
    link: '/category/cosmetics',
    linkLabel: 'Как выбирать косметику',
    note: 'Расчёт не задаёт «правильную» дозу — он лишь оценивает срок использования по выбранным вами привычкам.',
  };
};

const careFitQuestions: TestQuestion[] = [
  {
    id: 'priority',
    question: 'Что для вас сейчас важнее всего в уходе?',
    answers: [
      { value: 'comfort', label: 'Комфорт и меньше сухости', scores: { barrier: 3 } },
      { value: 'clear', label: 'Меньше блеска и высыпаний', scores: { light: 3 } },
      { value: 'tone', label: 'Более ровный тон и текстура', scores: { targeted: 3 } },
      { value: 'simple', label: 'Понятная схема без лишних банок', scores: { minimal: 3 } },
    ],
  },
  {
    id: 'feel',
    question: 'Как кожа чаще ощущается после обычного дня?',
    answers: [
      { value: 'tight', label: 'Сухой или стянутой', scores: { barrier: 2 } },
      { value: 'shiny', label: 'Жирной или блестящей', scores: { light: 2 } },
      { value: 'mixed', label: 'По-разному в разных зонах', scores: { minimal: 1, light: 1 } },
      { value: 'stable', label: 'В целом нормально', scores: { minimal: 2 } },
    ],
  },
  {
    id: 'reaction',
    question: 'Как кожа переносит новые продукты?',
    answers: [
      { value: 'reactive', label: 'Часто реагирует раздражением', scores: { barrier: 3 } },
      { value: 'sometimes', label: 'Иногда реагирует на активы', scores: { barrier: 1, minimal: 1 } },
      { value: 'fine', label: 'Обычно спокойно', scores: { targeted: 1, light: 1 } },
      { value: 'unknown', label: 'Пока мало опыта', scores: { minimal: 2 } },
    ],
  },
  {
    id: 'routine-size',
    question: 'Сколько средств вы хотите использовать регулярно?',
    answers: [
      { value: 'two-three', label: '2–3 средства', scores: { minimal: 3 } },
      { value: 'three-four', label: '3–4 средства', scores: { light: 1, barrier: 1 } },
      { value: 'four-five', label: '4–5 средств, если есть смысл', scores: { targeted: 2 } },
      { value: 'no-limit', label: 'Количество не важно, если схема понятна', scores: { targeted: 2 } },
    ],
  },
  {
    id: 'texture',
    question: 'Какие текстуры вам приятнее использовать?',
    answers: [
      { value: 'rich', label: 'Кремовые и более насыщенные', scores: { barrier: 2 } },
      { value: 'light', label: 'Гели, флюиды, лёгкие кремы', scores: { light: 2 } },
      { value: 'mix', label: 'Разные текстуры по зонам или времени дня', scores: { targeted: 1, minimal: 1 } },
      { value: 'any', label: 'Главное — чтобы схема была простой', scores: { minimal: 2 } },
    ],
  },
  {
    id: 'actives',
    question: 'Как вы относитесь к активным ингредиентам?',
    answers: [
      { value: 'avoid', label: 'Пока хочу обойтись без них', scores: { barrier: 1, minimal: 2 } },
      { value: 'one', label: 'Готов(а) использовать один актив под задачу', scores: { targeted: 2 } },
      { value: 'several', label: 'Уже умею сочетать несколько продуктов', scores: { targeted: 3 } },
      { value: 'unsure', label: 'Хочу сначала разобраться в базе', scores: { minimal: 3 } },
    ],
  },
];

const careFitResults: Record<string, TestResult> = {
  barrier: {
    title: 'Вам ближе мягкий уход с акцентом на комфорт',
    description: 'По ответам важнее всего снизить ощущение сухости и реактивности. Лучше начать с устойчивой базы и не торопиться с большим количеством активов.',
    tips: ['мягкое очищение без выраженной стянутости', 'комфортный увлажняющий крем', 'новые средства вводить по одному', 'активы добавлять только после стабильной базы'],
    link: '/category/skin/vosstanovlenie-barera',
    linkLabel: 'Восстановление кожного барьера',
  },
  light: {
    title: 'Вам ближе лёгкий и функциональный уход',
    description: 'По ответам вам важны комфортные лёгкие текстуры и контроль блеска без пересушивания. База может быть короткой, а актив — только под одну главную задачу.',
    tips: ['мягкое регулярное очищение', 'лёгкий увлажняющий крем или гель-крем', 'один целевой актив вместо нескольких похожих средств', 'не компенсировать блеск слишком агрессивным очищением'],
    link: '/category/skin/zhirnaya-kozha',
    linkLabel: 'Уход за жирной кожей',
  },
  targeted: {
    title: 'Вам ближе базовый уход с точечными активами',
    description: 'По ответам вы готовы оставить стабильную основу и добавить 1–2 средства под конкретные задачи. Такой подход проще контролировать, чем сложную схему из множества активов.',
    tips: ['сохранить неизменной базу очищения и увлажнения', 'каждому активу назначить конкретную задачу', 'не вводить несколько новых средств одновременно', 'при раздражении первым делом упростить схему'],
    link: '/ingredients',
    linkLabel: 'Подобрать актив по ингредиенту',
  },
  minimal: {
    title: 'Вам ближе минималистичный уход',
    description: 'По ответам важнее всего простота и регулярность. Вам не нужна длинная схема: несколько понятных этапов обычно легче поддерживать каждый день.',
    tips: ['очищение по необходимости', 'один подходящий увлажняющий крем', 'фотозащита по условиям пребывания на солнце', 'дополнительный продукт добавлять только при понятной задаче'],
    link: '/guides/bazovyy-uhod',
    linkLabel: 'Гайд по базовому уходу',
  },
};

export const tests: BeautyTest[] = [
  {
    slug: 'skin-type',
    title: 'Определить тип кожи',
    description: '8 вопросов о том, как кожа ведёт себя после умывания и в течение дня.',
    questions: skinTypeQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const reactivity = scores.sensitive ?? 0;
      const mainType = topScore({ dry: scores.dry ?? 0, oily: scores.oily ?? 0, combination: scores.combination ?? 0, normal: scores.normal ?? 0 }, 'normal');
      const resultKey = reactivity >= 5 && reactivity >= (scores[mainType] ?? 0) ? 'sensitive' : mainType;
      return skinTypeResults[resultKey] ?? skinTypeResults.normal;
    },
  },
  {
    slug: 'routine-builder',
    title: 'Построить схему ухода',
    description: 'Подберите базовые этапы по типу кожи, чувствительности и основной задаче.',
    questions: routineQuestions,
    getResult: getRoutineResult,
  },
  {
    slug: 'ingredient-compatibility',
    title: 'Проверить совместимость ингредиентов',
    description: 'Выберите два популярных актива и получите ориентир, как безопаснее встроить их в одну схему.',
    questions: compatibilityQuestions,
    getResult: getCompatibilityResult,
  },
  {
    slug: 'hair-porosity',
    title: 'Определить пористость волос',
    description: '7 вопросов о том, как волосы впитывают воду, сохнут и реагируют на уход.',
    questions: hairPorosityQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const resultKey = topScore(scores, 'medium');
      return hairResults[resultKey] ?? hairResults.medium;
    },
  },
  {
    slug: 'cosmetics-usage',
    title: 'Калькулятор расхода косметики',
    description: 'Оцените, на сколько примерно хватит средства с учётом объёма и вашей частоты использования.',
    questions: cosmeticsUsageQuestions,
    getResult: getCosmeticsUsageResult,
  },
  {
    slug: 'care-fit',
    title: 'Тест: какой уход вам подходит',
    description: 'Получите персональный ориентир по формату ухода, текстурам и сложности схемы.',
    questions: careFitQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const resultKey = topScore(scores, 'minimal');
      return careFitResults[resultKey] ?? careFitResults.minimal;
    },
  },
];
