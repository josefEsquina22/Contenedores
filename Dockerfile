from node:18
run addgroup --system appgroup && adduser --system appuser --uid 1001 --ingroup appgroup
run mkdir -p /home/app&& chown -R appuser:appgroup /home/app
copy . /home/app
expose 3000
user appuser
cmd ["node", "/home/app/probando.mjs"]