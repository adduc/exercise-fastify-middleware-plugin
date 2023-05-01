const fastify = require("fastify")({
  logger: "info",
});

fastify.register(require("./middleware/example"));

fastify.get("/", async (request, reply) => "Hello, world!");

port = process.env.PORT || 3000;

fastify
  .listen({ port: port })
  .then((address) => console.log(`server listening on ${address}`))
  .catch((err) => {
    console.log("Error starting server:", err);
    process.exit(1);
  });
