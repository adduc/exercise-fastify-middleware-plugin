const fp = require("fastify-plugin");

module.exports = fp(function (fastify, opts, done) {
  fastify.log.info("Registering example middleware");
  fastify.addHook("preHandler", async (request, reply) => {
    fastify.log.info("example preHandler handler");
    reply.send("Early response");
  });
  done();
});
