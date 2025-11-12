from node:18
run addgroup --system appgroup && adduser --system appuser --uid 1001 --ingroup appgroup
run mkdir -p /home/app&& chown -R appuser:appgroup /home/app
user appuser
copy . /home/app
expose 3000
cmd ["node", "/home/app/probando.mjs"]