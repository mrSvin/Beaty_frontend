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

const sunscreenAmountQuestions: TestQuestion[] = [
  {
    id: 'format',
    question: 'Какой формат фотозащиты вы чаще используете?',
    answers: [
      { value: 'cream', label: 'Крем или молочко', scores: { cream: 2 } },
      { value: 'fluid', label: 'Флюид или лёгкая эмульсия', scores: { fluid: 2 } },
      { value: 'stick', label: 'Стик или компактный формат', scores: { stick: 2 } },
      { value: 'spray', label: 'Спрей', scores: { spray: 2 } },
    ],
  },
  {
    id: 'face-area',
    question: 'На какую зону вы наносите средство?',
    answers: [
      { value: 'face', label: 'Только лицо', scores: { face: 2 } },
      { value: 'face-neck', label: 'Лицо и шея', scores: { 'face-neck': 3 } },
      { value: 'face-neck-ears', label: 'Лицо, шея и уши', scores: { 'face-neck-ears': 4 } },
      { value: 'face-neck-hands', label: 'Лицо, шея и открытые руки', scores: { 'face-neck-hands': 5 } },
    ],
  },
  {
    id: 'frequency',
    question: 'Как часто вы обновляете фотозащиту в течение дня?',
    answers: [
      { value: 'once', label: 'Один раз утром', scores: { once: 1 } },
      { value: 'twice', label: 'Два раза', scores: { twice: 2 } },
      { value: 'three', label: 'Три раза и чаще', scores: { three: 3 } },
      { value: 'varies', label: 'По-разному, зависит от дня', scores: { varies: 2 } },
    ],
  },
  {
    id: 'volume',
    question: 'Какой объём упаковки вы рассматриваете?',
    answers: [
      { value: '30', label: '30 мл' },
      { value: '50', label: '50 мл' },
      { value: '100', label: '100 мл' },
      { value: '200', label: '200 мл' },
    ],
  },
];

const getSunscreenAmountResult = (answers: Record<string, string>): TestResult => {
  const format = answers.format ?? 'cream';
  const zone = answers['face-area'] ?? 'face-neck';
  const frequency = Number(answers.frequency ?? 1);
  const volume = Number(answers.volume ?? 50);

  const formatUse: Record<string, number> = {
    cream: 1.2,
    fluid: 1,
    stick: 0.8,
    spray: 1.4,
  };

  const zoneUse: Record<string, number> = {
    face: 1,
    'face-neck': 1.4,
    'face-neck-ears': 1.6,
    'face-neck-hands': 2.2,
  };

  const perUse = (formatUse[format] ?? 1) * (zoneUse[zone] ?? 1);
  const days = Math.max(1, Math.round(volume / (perUse * frequency)));
  const weeks = Math.max(1, Math.round(days / 7));
  const timeLabel = days < 60 ? `${weeks} нед.` : `${(days / 30.4).toFixed(1).replace('.', ',')} мес.`;

  return {
    title: `Упаковки хватит примерно на ${timeLabel}`,
    description: `При выбранном формате, зоне нанесения и частоте обновления упаковки ${volume} мл обычно хватает примерно на ${days} дней. Это ориентир, а не точная норма.`,
    tips: [
      'наносите достаточное количество на все открытые зоны, а не только на лицо',
      'обновляйте фотозащиту после длительного пребывания на солнце, купания или сильного потоотделения',
      'для ежедневного использования удобно держать одно средство дома и одно компактное с собой',
      'если расход кажется слишком большим, проверьте, не наносите ли вы средство слишком тонким слоем',
    ],
    link: '/category/skin/solncezashchita',
    linkLabel: 'Материалы про фотозащиту',
    note: 'Расчёт не заменяет инструкцию производителя и не учитывает индивидуальные особенности пребывания на солнце.',
  };
};

const productOrderQuestions: TestQuestion[] = [
  {
    id: 'first',
    question: 'Какое средство вы наносите первым?',
    answers: [
      { value: 'cleanser', label: 'Очищение' },
      { value: 'toner', label: 'Тонер или тоник' },
      { value: 'serum', label: 'Сыворотка' },
      { value: 'cream', label: 'Крем' },
      { value: 'spf', label: 'Фотозащита' },
    ],
  },
  {
    id: 'second',
    question: 'Какое средство идёт следующим?',
    answers: [
      { value: 'toner', label: 'Тонер или тоник' },
      { value: 'serum', label: 'Сыворотка' },
      { value: 'cream', label: 'Крем' },
      { value: 'spf', label: 'Фотозащита' },
      { value: 'oil', label: 'Масло или плотный бальзам' },
    ],
  },
  {
    id: 'texture',
    question: 'Какая текстура у первого средства?',
    answers: [
      { value: 'watery', label: 'Водянистая' },
      { value: 'light', label: 'Лёгкая, гелевая' },
      { value: 'cream', label: 'Кремовая' },
      { value: 'rich', label: 'Плотная, масляная' },
    ],
  },
  {
    id: 'goal',
    question: 'Зачем вам нужно поменять порядок?',
    answers: [
      { value: 'irritation', label: 'Появилось раздражение или сухость' },
      { value: 'pilling', label: 'Средства скатываются' },
      { value: 'efficiency', label: 'Хочу, чтобы активы работали эффективнее' },
      { value: 'simplify', label: 'Хочу упростить схему' },
    ],
  },
];

const getProductOrderResult = (answers: Record<string, string>): TestResult => {
  const first = answers.first ?? 'cleanser';
  const second = answers.second ?? 'toner';
  const texture = answers.texture ?? 'light';
  const goal = answers.goal ?? 'simplify';

  const orderRank: Record<string, number> = {
    cleanser: 1,
    toner: 2,
    serum: 3,
    cream: 4,
    spf: 5,
    oil: 6,
  };

  const firstRank = orderRank[first] ?? 1;
  const secondRank = orderRank[second] ?? 2;
  const correctOrder = firstRank < secondRank;

  if (!correctOrder) {
    return {
      title: 'Порядок стоит поменять',
      description: 'По выбранным средствам видно, что более плотное или защитное средство идёт раньше более лёгкого. Обычно это снижает комфорт и может мешать последующим этапам.',
      tips: [
        'наносите средства от самой лёгкой текстуры к самой плотной',
        'фотозащита — финальный шаг утреннего ухода',
        'масло или плотный бальзам обычно идут после крема, если это предусмотрено продуктом',
        'если средства скатываются, попробуйте уменьшить количество или сделать паузу между этапами',
      ],
      link: '/guides/poryadok-naneseniya',
      linkLabel: 'Как правильно наносить средства',
    };
  }

  if (goal === 'irritation') {
    return {
      title: 'Порядок верный, но схему лучше упростить',
      description: 'Средства стоят в логичном порядке, однако раздражение или сухость — повод уменьшить количество активов и оставить только базовые этапы.',
      tips: [
        'оставьте очищение, увлажнение и фотозащиту',
        'уберите или сократите активы до одной задачи',
        'вводите новое средство не чаще одного раза в 1–2 недели',
        'при стойком раздражении обратитесь к врачу',
      ],
      link: '/category/skin/vosstanovlenie-barera',
      linkLabel: 'Восстановление кожного барьера',
    };
  }

  if (goal === 'pilling') {
    return {
      title: 'Порядок верный, но есть нюанс с текстурами',
      description: 'Логика нанесения не нарушена, но скатывание часто связано с количеством средства, паузами между этапами или несовместимостью формул.',
      tips: [
        'наносите меньше средства и распределяйте тонким слоем',
        'давайте каждому этапу впитаться 30–60 секунд',
        'не растирайте фотозащиту слишком активно',
        'попробуйте менять одно средство за раз, чтобы найти причину',
      ],
      link: '/guides/kak-chitat-sostav',
      linkLabel: 'Как читать состав косметики',
    };
  }

  return {
    title: 'Порядок выглядит логично',
    description: 'Средства стоят от более лёгкого к более плотному, а фотозащита завершает утреннюю схему. Такой порядок обычно удобен и предсказуем.',
    tips: [
      'сохраняйте принцип «от лёгкого к плотному»',
      'фотозащита всегда последний шаг утром',
      'если добавляете новое средство, ставьте его по текстуре, а не по названию',
      'при сомнениях ориентируйтесь на инструкцию производителя',
    ],
    link: '/guides/bazovyy-uhod',
    linkLabel: 'Гайд по базовому уходу',
  };
};

const dehydrationQuestions: TestQuestion[] = [
  {
    id: 'tightness',
    question: 'Как кожа ощущается после умывания и без крема?',
    answers: [
      { value: 'tight-always', label: 'Стянуто почти всегда', scores: { dry: 3 } },
      { value: 'tight-sometimes', label: 'Стянуто, если не нанести крем сразу', scores: { dehydrated: 2, dry: 1 } },
      { value: 'comfortable', label: 'Комфортно, но хочется увлажнения', scores: { dehydrated: 2 } },
      { value: 'fine', label: 'Почти не чувствую разницы', scores: { normal: 2 } },
    ],
  },
  {
    id: 'midday',
    question: 'Что происходит с кожей к середине дня?',
    answers: [
      { value: 'dull', label: 'Становится тусклой, серой, уставшей', scores: { dehydrated: 3 } },
      { value: 'flaky', label: 'Появляются шероховатость и шелушение', scores: { dry: 3 } },
      { value: 'oily-tight', label: 'Блестит, но при этом есть стянутость', scores: { dehydrated: 3, oily: 1 } },
      { value: 'stable', label: 'Почти не меняется', scores: { normal: 2 } },
    ],
  },
  {
    id: 'lines',
    question: 'Как ведут себя мелкие линии на коже?',
    answers: [
      { value: 'appear', label: 'Появляются к вечеру и исчезают после крема', scores: { dehydrated: 3 } },
      { value: 'constant', label: 'Заметны постоянно, даже утром', scores: { dry: 2 } },
      { value: 'rare', label: 'Почти не замечаю', scores: { normal: 2 } },
      { value: 'zones', label: 'Только в отдельных зонах, например вокруг глаз', scores: { dehydrated: 1, dry: 1 } },
    ],
  },
  {
    id: 'water',
    question: 'Как кожа реагирует на контакт с водой?',
    answers: [
      { value: 'worse', label: 'После воды становится суше и жёстче', scores: { dry: 2, dehydrated: 1 } },
      { value: 'better-temporarily', label: 'Сразу лучше, но ненадолго', scores: { dehydrated: 3 } },
      { value: 'neutral', label: 'Почти не влияет', scores: { normal: 2 } },
      { value: 'irritated', label: 'Появляется покраснение или дискомфорт', scores: { sensitive: 2 } },
    ],
  },
  {
    id: 'cream-effect',
    question: 'Как кожа отвечает на увлажняющий крем?',
    answers: [
      { value: 'quick-comfort', label: 'Быстро становится комфортнее, но эффект нестойкий', scores: { dehydrated: 3 } },
      { value: 'long-comfort', label: 'Комфорт держится долго', scores: { dry: 2 } },
      { value: 'needs-rich', label: 'Нужны только насыщенные текстуры', scores: { dry: 3 } },
      { value: 'any', label: 'Подходит почти любой крем', scores: { normal: 2 } },
    ],
  },
  {
    id: 'shine',
    question: 'Есть ли одновременно блеск и ощущение сухости?',
    answers: [
      { value: 'yes', label: 'Да, часто', scores: { dehydrated: 4 } },
      { value: 'sometimes', label: 'Иногда, например в отопительный сезон', scores: { dehydrated: 2 } },
      { value: 'no', label: 'Нет', scores: { normal: 1 } },
      { value: 'oily', label: 'Скорее просто блеск без стянутости', scores: { oily: 2 } },
    ],
  },
  {
    id: 'season',
    question: 'Когда состояние кожи ухудшается заметнее всего?',
    answers: [
      { value: 'heating', label: 'В отопительный сезон или в сухом воздухе', scores: { dehydrated: 3 } },
      { value: 'winter', label: 'Зимой на улице', scores: { dry: 3 } },
      { value: 'summer', label: 'Летом на солнце или в жару', scores: { dehydrated: 1, oily: 1 } },
      { value: 'stable', label: 'Почти не зависит от сезона', scores: { normal: 2 } },
    ],
  },
];

const dehydrationResults: Record<string, TestResult> = {
  dehydrated: {
    title: 'Ваш ориентир — обезвоженная кожа',
    description: 'По ответам коже чаще не хватает влаги, а не липидов. Она может блестеть и одновременно казаться стянутой, а мелкие линии появляются к вечеру и сглаживаются после увлажнения.',
    tips: [
      'наносите увлажняющий крем на слегка влажную кожу',
      'выбирайте текстуры с увлажнителями: глицерин, гиалуроновая кислота, пантенол',
      'не пересушивайте кожу агрессивным очищением и спиртом',
      'поддерживайте влагу в помещении и не забывайте про питьевой режим',
    ],
    link: '/category/skin/uvlazhnenie',
    linkLabel: 'Материалы про увлажнение',
    note: 'Обезвоженность — это состояние, а не тип кожи: она может встречаться при любом типе.',
  },
  dry: {
    title: 'Ваш ориентир — сухая кожа',
    description: 'По ответам коже не хватает не только влаги, но и липидной поддержки. Стянутость и шелушение держатся дольше, а насыщенные текстуры обычно воспринимаются хорошо.',
    tips: [
      'используйте мягкое очищение без выраженной стянутости',
      'выбирайте кремы с липидами: церамиды, сквалан, масла, жирные спирты',
      'не перегружайте схему несколькими раздражающими активами',
      'днём добавляйте фотозащиту по условиям пребывания на солнце',
    ],
    link: '/category/skin/suhaya-kozha',
    linkLabel: 'Материалы для сухой кожи',
  },
  normal: {
    title: 'Признаков выраженной сухости или обезвоженности немного',
    description: 'По ответам кожа большую часть времени остаётся комфортной. Достаточно базового увлажнения и мягкого очищения, чтобы поддерживать состояние.',
    tips: [
      'сохраняйте мягкое очищение',
      'используйте комфортный базовый увлажняющий крем',
      'следите за состоянием кожи при смене сезона',
      'не усложняйте уход без конкретной задачи',
    ],
    link: '/guides/bazovyy-uhod',
    linkLabel: 'Гайд по базовому уходу',
  },
  oily: {
    title: 'Скорее всего, речь о жирности, а не о сухости',
    description: 'По ответам блеск появляется без стянутости и шелушения. Это не исключает обезвоженности, но в первую очередь важно подобрать лёгкое увлажнение и мягкое очищение.',
    tips: [
      'выбирайте лёгкие увлажняющие текстуры',
      'не пытайтесь полностью обезжирить кожу',
      'активы добавляйте по одной задаче',
      'при появлении стянутости пересмотрите очищение',
    ],
    link: '/category/skin/zhirnaya-kozha',
    linkLabel: 'Материалы для жирной кожи',
  },
};

const reactivityQuestions: TestQuestion[] = [
  {
    id: 'reaction-frequency',
    question: 'Как часто кожа реагирует на новые средства?',
    answers: [
      { value: 'often', label: 'Почти на каждое новое средство', scores: { high: 4 } },
      { value: 'sometimes', label: 'Иногда, особенно на активные формулы', scores: { medium: 3 } },
      { value: 'rare', label: 'Редко', scores: { low: 2 } },
      { value: 'never', label: 'Практически никогда', scores: { low: 3 } },
    ],
  },
  {
    id: 'symptoms',
    question: 'Какие симптомы появляются чаще всего?',
    answers: [
      { value: 'redness', label: 'Покраснение', scores: { high: 3 } },
      { value: 'stinging', label: 'Жжение или пощипывание', scores: { high: 3 } },
      { value: 'dryness', label: 'Сухость и шелушение', scores: { medium: 2 } },
      { value: 'rare', label: 'Почти ничего', scores: { low: 2 } },
    ],
  },
  {
    id: 'triggers',
    question: 'Что чаще провоцирует реакцию?',
    answers: [
      { value: 'actives', label: 'Кислоты, ретиноиды, витамин C', scores: { high: 3 } },
      { value: 'fragrance', label: 'Отдушки, эфирные масла, спирт', scores: { high: 3 } },
      { value: 'weather', label: 'Холод, ветер, солнце, вода', scores: { medium: 2 } },
      { value: 'nothing', label: 'Сложно выделить', scores: { low: 1 } },
    ],
  },
  {
    id: 'recovery',
    question: 'Как быстро кожа успокаивается после реакции?',
    answers: [
      { value: 'days', label: 'За несколько дней', scores: { medium: 2 } },
      { value: 'week', label: 'За неделю и дольше', scores: { high: 3 } },
      { value: 'day', label: 'В течение дня', scores: { low: 2 } },
      { value: 'unknown', label: 'Не отслеживал(а)', scores: { medium: 1 } },
    ],
  },
  {
    id: 'baseline',
    question: 'Как кожа выглядит в спокойном состоянии?',
    answers: [
      { value: 'red-areas', label: 'Есть участки покраснения или купероз', scores: { high: 3 } },
      { value: 'reactive-weather', label: 'Реагирует на погоду, но без стойких изменений', scores: { medium: 2 } },
      { value: 'even', label: 'Ровная, без выраженных реакций', scores: { low: 2 } },
      { value: 'varies', label: 'Зависит от дня и состояния', scores: { medium: 1 } },
    ],
  },
  {
    id: 'history',
    question: 'Были ли диагностированные состояния кожи?',
    answers: [
      { value: 'rosacea', label: 'Розацеа или склонность к ней', scores: { high: 4 } },
      { value: 'dermatitis', label: 'Дерматит, экзема или псориаз', scores: { high: 3 } },
      { value: 'acne-treatment', label: 'Лечение акне или ретиноиды по назначению', scores: { medium: 2 } },
      { value: 'none', label: 'Нет', scores: { low: 2 } },
    ],
  },
];

const reactivityResults: Record<string, TestResult> = {
  high: {
    title: 'Высокая реактивность кожи',
    description: 'По ответам кожа часто и заметно реагирует на новое, а восстановление занимает время. В такой ситуации важнее предсказуемость и минимум активов, чем количество шагов.',
    tips: [
      'оставьте простую базу: мягкое очищение и увлажнение',
      'вводите новые средства по одному, с интервалом 1–2 недели',
      'избегайте одновременного старта нескольких активов',
      'при стойком покраснении, жжении или выраженных симптомах обратитесь к врачу',
    ],
    link: '/category/skin/chuvstvitelnaya-kozha',
    linkLabel: 'Материалы для чувствительной кожи',
    note: 'Реактивность не является диагнозом и может встречаться при любом типе кожи.',
  },
  medium: {
    title: 'Умеренная реактивность кожи',
    description: 'По ответам кожа иногда реагирует, чаще на активные формулы или внешние факторы. Схема может быть обычной, но с осторожным введением новых средств.',
    tips: [
      'вводите активы постепенно и по одному',
      'сохраняйте базовое увлажнение',
      'при реакции сократите частоту использования, а не добавляйте новые средства',
      'учитывайте погоду и сезон при смене ухода',
    ],
    link: '/category/skin/chuvstvitelnaya-kozha',
    linkLabel: 'Материалы для чувствительной кожи',
  },
  low: {
    title: 'Низкая реактивность кожи',
    description: 'По ответам кожа обычно спокойно переносит новые средства. Это позволяет гибче строить схему, но не отменяет постепенного введения активов.',
    tips: [
      'всё равно вводите по одному новому средству',
      'оценивайте переносимость в течение 1–2 недель',
      'сохраняйте базовое увлажнение и фотозащиту',
      'при появлении реакции действуйте так же осторожно, как при чувствительной коже',
    ],
    link: '/guides/bazovyy-uhod',
    linkLabel: 'Гайд по базовому уходу',
  },
};

const activeForGoalQuestions: TestQuestion[] = [
  {
    id: 'goal',
    question: 'Какая задача сейчас главная?',
    answers: [
      { value: 'acne', label: 'Высыпания и забитые поры', scores: { bha: 3, azelaic: 3, niacinamide: 2 } },
      { value: 'tone', label: 'Неровный тон и постакне', scores: { vitaminC: 3, azelaic: 2, niacinamide: 2 } },
      { value: 'aging', label: 'Мелкие морщины и упругость', scores: { retinoid: 3, peptides: 2, vitaminC: 2 } },
      { value: 'dryness', label: 'Сухость и комфорт', scores: { peptides: 2, niacinamide: 2 } },
    ],
  },
  {
    id: 'sensitivity',
    question: 'Как кожа переносит активы?',
    answers: [
      { value: 'high', label: 'Плохо, легко раздражается', scores: { azelaic: 2, niacinamide: 2, peptides: 2 } },
      { value: 'medium', label: 'Иногда реагирует', scores: { azelaic: 1, niacinamide: 1, vitaminC: 1 } },
      { value: 'low', label: 'Обычно спокойно', scores: { retinoid: 1, bha: 1, vitaminC: 1 } },
      { value: 'new', label: 'Пока нет опыта', scores: { niacinamide: 2, peptides: 2 } },
    ],
  },
  {
    id: 'experience',
    question: 'Какой у вас опыт с активами?',
    answers: [
      { value: 'none', label: 'Почти нет', scores: { niacinamide: 2, peptides: 2, azelaic: 1 } },
      { value: 'one', label: 'Пробовал(а) один-два', scores: { azelaic: 1, vitaminC: 1, bha: 1 } },
      { value: 'several', label: 'Регулярно использую несколько', scores: { retinoid: 2, vitaminC: 2, bha: 2 } },
      { value: 'overload', label: 'Была реакция от сложной схемы', scores: { peptides: 2, niacinamide: 2 } },
    ],
  },
  {
    id: 'texture',
    question: 'Какие текстуры вам комфортнее?',
    answers: [
      { value: 'watery', label: 'Водянистые и лёгкие', scores: { niacinamide: 2, vitaminC: 1 } },
      { value: 'gel', label: 'Гелевые', scores: { bha: 2, niacinamide: 1 } },
      { value: 'cream', label: 'Кремовые', scores: { retinoid: 2, peptides: 2, azelaic: 1 } },
      { value: 'any', label: 'Без разницы', scores: {} },
    ],
  },
  {
    id: 'time',
    question: 'Сколько времени готовы ждать результат?',
    answers: [
      { value: 'weeks', label: 'Несколько недель', scores: { bha: 2, azelaic: 1 } },
      { value: 'months', label: '2–3 месяца', scores: { vitaminC: 2, niacinamide: 2, azelaic: 1 } },
      { value: 'long', label: 'Готов(а) к долгому процессу', scores: { retinoid: 3, peptides: 2 } },
      { value: 'unknown', label: 'Не задумывался(ась)', scores: { niacinamide: 1, peptides: 1 } },
    ],
  },
];

const activeForGoalResults: Record<string, TestResult> = {
  bha: {
    title: 'Вам может подойти BHA (салициловая кислота)',
    description: 'По ответам основная задача — высыпания и забитые поры. BHA обычно рассматривают как один из вариантов для такого запроса, особенно при жирной и комбинированной коже.',
    tips: [
      'начинайте с низкой концентрации и 2–3 раз в неделю',
      'не сочетайте в один день с другими отшелушивающими активами',
      'сохраняйте увлажнение и фотозащиту',
      'при стойком раздражении сократите частоту или сделайте паузу',
    ],
    link: '/ingredients',
    linkLabel: 'Подробнее об ингредиентах',
  },
  azelaic: {
    title: 'Вам может подойти азелаиновая кислота',
    description: 'По ответам задача связана с высыпаниями или неровным тоном, а кожа может быть чувствительной. Азелаиновую кислоту часто рассматривают как более мягкий вариант для таких запросов.',
    tips: [
      'вводите постепенно, начиная с нескольких раз в неделю',
      'подходит для комбинации с базовым увлажнением',
      'не наслаивайте сразу с другими активными кислотами',
      'оценивайте результат через несколько недель',
    ],
    link: '/ingredients',
    linkLabel: 'Подробнее об ингредиентах',
  },
  niacinamide: {
    title: 'Вам может подойти ниацинамид',
    description: 'По ответам важны мягкость и универсальность. Ниацинамид часто рассматривают как базовый актив для тона, жирности и комфорта, в том числе при небольшом опыте.',
    tips: [
      'начинайте с концентрации 4–5%',
      'подходит для утреннего и вечернего ухода',
      'при покраснении уменьшите концентрацию или частоту',
      'хорошо сочетается с базовым увлажнением и фотозащитой',
    ],
    link: '/ingredients',
    linkLabel: 'Подробнее об ингредиентах',
  },
  vitaminC: {
    title: 'Вам может подойти витамин C',
    description: 'По ответам задача связана с тоном и тусклостью. Витамин C часто рассматривают для визуального выравнивания тона и антиоксидантной поддержки.',
    tips: [
      'начинайте с производных витамина C, если кожа чувствительная',
      'используйте утром перед фотозащитой',
      'при жжении или покраснении сократите частоту',
      'храните продукт по инструкции, чтобы он не окислялся',
    ],
    link: '/ingredients',
    linkLabel: 'Подробнее об ингредиентах',
  },
  retinoid: {
    title: 'Вам может подойти ретиноид',
    description: 'По ответам задача связана с морщинами и упругостью, а опыта достаточно для более серьёзного актива. Ретиноиды обычно вводят постепенно и с осторожностью.',
    tips: [
      'начинайте с низкой концентрации и 1–2 раз в неделю',
      'наносите вечером на сухую кожу',
      'сохраняйте увлажнение и утром используйте фотозащиту',
      'не сочетайте в один день с кислотами',
    ],
    link: '/ingredients',
    linkLabel: 'Подробнее об ингредиентах',
    note: 'При беременности и некоторых состояниях кожи ретиноиды обсуждают с врачом.',
  },
  peptides: {
    title: 'Вам могут подойти пептиды',
    description: 'По ответам важны мягкость и комфорт. Пептиды часто рассматривают как поддерживающий актив без выраженного раздражающего действия.',
    tips: [
      'подходят для утреннего и вечернего ухода',
      'хорошо сочетаются с увлажнением и фотозащитой',
      'результат оценивают постепенно, за несколько недель',
      'не требуют сложной схемы введения',
    ],
    link: '/ingredients',
    linkLabel: 'Подробнее об ингредиентах',
  },
};

const spfChoiceQuestions: TestQuestion[] = [
  {
    id: 'exposure',
    question: 'Сколько времени вы обычно проводите на улице в светлое время суток?',
    answers: [
      { value: 'minimal', label: 'До 15 минут, в основном по пути', scores: { low: 2 } },
      { value: 'moderate', label: '30–60 минут', scores: { medium: 3 } },
      { value: 'long', label: 'Несколько часов', scores: { high: 4 } },
      { value: 'varies', label: 'Сильно зависит от дня', scores: { medium: 2 } },
    ],
  },
  {
    id: 'uv-index',
    question: 'В каком регионе и сезоне вы чаще находитесь?',
    answers: [
      { value: 'low', label: 'Умеренный климат, короткое лето', scores: { low: 2 } },
      { value: 'medium', label: 'Средняя полоса, выраженные сезоны', scores: { medium: 2 } },
      { value: 'high', label: 'Юг, горы или долгое жаркое лето', scores: { high: 3 } },
      { value: 'trip', label: 'Часто бываю в отпуске у моря', scores: { high: 3 } },
    ],
  },
  {
    id: 'skin',
    question: 'Как кожа реагирует на солнце?',
    answers: [
      { value: 'burns', label: 'Быстро краснеет и обгорает', scores: { high: 4 } },
      { value: 'tans-slowly', label: 'Загорает постепенно, но может обгореть', scores: { medium: 3 } },
      { value: 'tans-easily', label: 'Загорает легко, почти не обгорает', scores: { low: 2 } },
      { value: 'pigment', label: 'Появляются пигментные пятна', scores: { high: 3 } },
    ],
  },
  {
    id: 'activity',
    question: 'Есть ли активность на солнце: спорт, вода, потоотделение?',
    answers: [
      { value: 'none', label: 'Почти нет', scores: { low: 1 } },
      { value: 'some', label: 'Иногда', scores: { medium: 2 } },
      { value: 'water', label: 'Да, часто бываю у воды', scores: { high: 3 } },
      { value: 'sport', label: 'Да, регулярный спорт на улице', scores: { high: 3 } },
    ],
  },
  {
    id: 'goal',
    question: 'Какая цель у фотозащиты?',
    answers: [
      { value: 'daily', label: 'Ежедневная база', scores: { medium: 2 } },
      { value: 'pigment', label: 'Профилактика пигментации', scores: { high: 3 } },
      { value: 'procedure', label: 'После процедур или активов', scores: { high: 4 } },
      { value: 'sun', label: 'Максимальная защита на солнце', scores: { high: 4 } },
    ],
  },
  {
    id: 'format',
    question: 'Какой формат вам удобнее?',
    answers: [
      { value: 'cream', label: 'Крем', scores: { cream: 2 } },
      { value: 'fluid', label: 'Флюид или эмульсия', scores: { fluid: 2 } },
      { value: 'stick', label: 'Стик для обновления', scores: { stick: 2 } },
      { value: 'spray', label: 'Спрей', scores: { spray: 1 } },
    ],
  },
];

const getSpfChoiceResult = (answers: Record<string, string>): TestResult => {
  const scores = sumScores(
      {
        slug: 'spf-choice',
        title: '',
        description: '',
        questions: spfChoiceQuestions,
        getResult: () => ({ title: '', description: '', tips: [], link: '', linkLabel: '' }),
      },
      answers,
  );

  const total = (scores.low ?? 0) + (scores.medium ?? 0) + (scores.high ?? 0);
  const level = total >= 14 ? 'high' : total >= 8 ? 'medium' : 'low';

  const levelData: Record<string, TestResult> = {
    high: {
      title: 'Вам нужен SPF 50 с регулярным обновлением',
      description: 'По ответам условия и тип кожи требуют максимальной бытовой защиты. Ориентир — SPF 50, широкий спектр UVA/UVB и обновление каждые 2 часа на солнце.',
      tips: [
        'выбирайте SPF 50 с пометкой UVA или PA++++',
        'наносите достаточно средства на все открытые зоны',
        'обновляйте каждые 2 часа на солнце, после воды и потоотделения',
        'дополнительно используйте очки, шляпу и тень',
      ],
      link: '/category/skin/solncezashchita',
      linkLabel: 'Материалы про фотозащиту',
    },
    medium: {
      title: 'Вам подойдёт SPF 30–50 в ежедневном формате',
      description: 'По ответам достаточно регулярной ежедневной фотозащиты. SPF 30–50 с широким спектром закроет базовые потребности, а в отпуске и на активном солнце лучше переходить на SPF 50.',
      tips: [
        'используйте SPF 30–50 каждый день, даже в облачную погоду',
        'обновляйте при длительном пребывании на улице',
        'не забывайте про шею, уши и открытые руки',
        'в отпуске и горах повышайте защиту до SPF 50',
      ],
      link: '/category/skin/solncezashchita',
      linkLabel: 'Материалы про фотозащиту',
    },
    low: {
      title: 'Вам достаточно базового SPF 30 ежедневно',
      description: 'По ответам условия мягкие, но ежедневная фотозащита всё равно остаётся базовым шагом. SPF 30 с широким спектром обычно достаточно для короткого пребывания на улице.',
      tips: [
        'наносите SPF 30 утром как финальный шаг ухода',
        'обновляйте при длительном пребывании на солнце',
        'зимой и в облачную погоду фотозащита тоже нужна',
        'при поездках на юг временно повышайте SPF до 50',
      ],
      link: '/category/skin/solncezashchita',
      linkLabel: 'Материалы про фотозащиту',
    },
  };

  return levelData[level] ?? levelData.medium;
};

const scalpTypeQuestions: TestQuestion[] = [
  {
    id: 'wash-frequency',
    question: 'Как часто волосы у корней выглядят свежими после мытья?',
    answers: [
      { value: 'day', label: 'Уже к концу дня появляется жирность', scores: { oily: 3 } },
      { value: 'two-days', label: 'Свежие 1–2 дня', scores: { normal: 2 } },
      { value: 'week', label: 'Могут оставаться свежими почти неделю', scores: { dry: 3 } },
      { value: 'varies', label: 'По-разному, зависит от сезона', scores: { normal: 1, oily: 1 } },
    ],
  },
  {
    id: 'flaking',
    question: 'Есть ли на коже головы шелушение или перхоть?',
    answers: [
      { value: 'oily-flakes', label: 'Да, желтоватые или жирные хлопья', scores: { oily: 3, dandruff: 2 } },
      { value: 'dry-flakes', label: 'Да, сухие белые хлопья', scores: { dry: 3 } },
      { value: 'sometimes', label: 'Иногда, например зимой', scores: { dry: 1, dandruff: 1 } },
      { value: 'no', label: 'Нет', scores: { normal: 2 } },
    ],
  },
  {
    id: 'itch',
    question: 'Как часто кожа головы чешется или реагирует?',
    answers: [
      { value: 'often', label: 'Часто', scores: { sensitive: 3, dandruff: 1 } },
      { value: 'sometimes', label: 'Иногда', scores: { sensitive: 2 } },
      { value: 'after-wash', label: 'После мытья, но быстро проходит', scores: { sensitive: 1, dry: 1 } },
      { value: 'no', label: 'Практически нет', scores: { normal: 2 } },
    ],
  },
  {
    id: 'roots-feel',
    question: 'Как ощущаются корни волос через день после мытья?',
    answers: [
      { value: 'greasy', label: 'Жирные, тяжёлые', scores: { oily: 3 } },
      { value: 'comfortable', label: 'Комфортные', scores: { normal: 2 } },
      { value: 'tight', label: 'Сухие, стянутые', scores: { dry: 3 } },
      { value: 'mixed', label: 'Корни жирные, а концы сухие', scores: { combination: 3 } },
    ],
  },
  {
    id: 'products',
    question: 'Как кожа головы реагирует на обычный шампунь?',
    answers: [
      { value: 'oily-fast', label: 'Быстро становится жирной', scores: { oily: 2 } },
      { value: 'dry', label: 'Появляется сухость или стянутость', scores: { dry: 2 } },
      { value: 'irritation', label: 'Появляется зуд или покраснение', scores: { sensitive: 3 } },
      { value: 'fine', label: 'Обычно всё в порядке', scores: { normal: 2 } },
    ],
  },
  {
    id: 'season',
    question: 'Меняется ли состояние кожи головы по сезонам?',
    answers: [
      { value: 'winter-dry', label: 'Зимой становится суше и чувствительнее', scores: { dry: 2, sensitive: 1 } },
      { value: 'summer-oily', label: 'Летом быстрее жирнеет', scores: { oily: 2 } },
      { value: 'stable', label: 'Почти не меняется', scores: { normal: 2 } },
      { value: 'varies', label: 'Меняется, но по-разному', scores: { combination: 1, sensitive: 1 } },
    ],
  },
];

const scalpTypeResults: Record<string, TestResult> = {
  oily: {
    title: 'Ваш ориентир — жирная кожа головы',
    description: 'По ответам корни быстро теряют свежесть, а кожа головы может давать жирные хлопья. Важно мягкое, но регулярное очищение без пересушивания.',
    tips: [
      'мойте голову так часто, как требуется, без чувства вины',
      'выбирайте шампунь для жирной кожи головы, при перхоти — с противогрибковым компонентом',
      'наносите шампунь на кожу головы, а не только на волосы',
      'кондиционер используйте по длине, не затрагивая корни',
    ],
    link: '/category/hair/zhirnaya-kozha-golovy',
    linkLabel: 'Материалы про жирную кожу головы',
  },
  dry: {
    title: 'Ваш ориентир — сухая кожа головы',
    description: 'По ответам кожа головы может быть стянутой и склонной к сухим хлопьям. Часто помогает более мягкое очищение и увлажняющий уход.',
    tips: [
      'выбирайте мягкие шампуни без агрессивных сульфатов',
      'не мойте голову слишком горячей водой',
      'добавьте увлажняющий несмываемый уход по длине',
      'зимой защищайте кожу головы от пересушивания',
    ],
    link: '/category/hair/suhaya-kozha-golovy',
    linkLabel: 'Материалы про сухую кожу головы',
  },
  sensitive: {
    title: 'Ваш ориентир — чувствительная кожа головы',
    description: 'По ответам кожа головы часто чешется или реагирует на продукты. Важно минимизировать раздражители и выбирать мягкие формулы.',
    tips: [
      'выбирайте шампуни без отдушек и эфирных масел',
      'избегайте слишком горячей воды и активного массажа ногтями',
      'вводите новые средства по одному',
      'при стойком зуде или покраснении обратитесь к врачу',
    ],
    link: '/category/hair/chuvstvitelnaya-kozha-golovy',
    linkLabel: 'Материалы про чувствительную кожу головы',
  },
  combination: {
    title: 'Ваш ориентир — комбинированная кожа головы',
    description: 'По ответам корни жирнее, а длина суше. Это частая ситуация: кожа головы и волосы требуют разного ухода.',
    tips: [
      'мойте кожу головы шампунем для жирных корней',
      'кондиционер и маску наносите только по длине',
      'не наносите несмываемый уход на корни',
      'при необходимости используйте разные средства для кожи головы и длины',
    ],
    link: '/category/hair/kombinirovannaya-kozha-golovy',
    linkLabel: 'Материалы про уход за кожей головы',
  },
  dandruff: {
    title: 'Ваш ориентир — склонность к перхоти',
    description: 'По ответам есть шелушение и зуд, что часто связано с активностью микроорганизмов на коже головы. Обычно помогают специальные шампуни с противогрибковыми компонентами.',
    tips: [
      'используйте шампунь с цинком, кетоконазолом или салициловой кислотой',
      'держите средство на коже головы по инструкции',
      'не отказывайтесь от регулярного мытья',
      'при стойкой перхоти обратитесь к врачу',
    ],
    link: '/category/hair/perhot',
    linkLabel: 'Материалы про перхоть',
  },
  normal: {
    title: 'Ваш ориентир — нормальная кожа головы',
    description: 'По ответам кожа головы остаётся комфортной без выраженной жирности, сухости или реакций. Достаточно регулярного мягкого ухода.',
    tips: [
      'мойте голову по мере необходимости',
      'выбирайте мягкий шампунь под ваш тип волос',
      'кондиционер используйте по длине',
      'следите за реакцией при смене сезона и средств',
    ],
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
  {
    slug: 'sunscreen-amount',
    title: 'Сколько хватит фотозащиты',
    description: 'Оцените расход солнцезащитного средства по формату, зоне нанесения и частоте обновления.',
    questions: sunscreenAmountQuestions,
    getResult: getSunscreenAmountResult,
  },
  {
    slug: 'product-order',
    title: 'Проверить порядок нанесения',
    description: 'Выберите два средства и узнайте, нет ли ошибки в последовательности ухода.',
    questions: productOrderQuestions,
    getResult: getProductOrderResult,
  },
  {
    slug: 'dehydration-vs-dryness',
    title: 'Обезвоженность или сухость',
    description: '7 вопросов, чтобы понять, чего коже не хватает: влаги или липидной поддержки.',
    questions: dehydrationQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const resultKey = topScore(scores, 'normal');
      return dehydrationResults[resultKey] ?? dehydrationResults.normal;
    },
  },
  {
    slug: 'reactivity',
    title: 'Чувствительность и реактивность',
    description: 'Оцените, насколько кожа склонна к реакциям, и как безопаснее вводить активы.',
    questions: reactivityQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const resultKey = topScore(scores, 'low');
      return reactivityResults[resultKey] ?? reactivityResults.low;
    },
  },
  {
    slug: 'active-for-goal',
    title: 'Какой актив под вашу задачу',
    description: 'Выберите задачу и получите ориентир по подходящему активному ингредиенту.',
    questions: activeForGoalQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const resultKey = topScore(scores, 'niacinamide');
      return activeForGoalResults[resultKey] ?? activeForGoalResults.niacinamide;
    },
  },
  {
    slug: 'spf-choice',
    title: 'Какой SPF вам нужен',
    description: 'Оцените уровень фотозащиты по образу жизни, региону и типу кожи.',
    questions: spfChoiceQuestions,
    getResult: getSpfChoiceResult,
  },
  {
    slug: 'scalp-type',
    title: 'Определить тип кожи головы',
    description: '6 вопросов о жирности, шелушении и реакциях кожи головы.',
    questions: scalpTypeQuestions,
    getResult(answers) {
      const scores = sumScores(this, answers);
      const resultKey = topScore(scores, 'normal');
      return scalpTypeResults[resultKey] ?? scalpTypeResults.normal;
    },
  },
];
