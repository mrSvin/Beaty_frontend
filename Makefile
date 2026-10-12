deploy:
	npm.cmd run build
	scp -r ./dist/* alex@192.168.1.45:/var/www/simbeauty/
