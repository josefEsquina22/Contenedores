FROM node:18
run mkdir -p /home/app
copy . /home/app
EXPOSE 3000
cmd ["node", "/home/app/probando.mjs"]