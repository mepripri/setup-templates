import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/", async () => {
  return { message: "Fastify backend running (setup)" };
});

const PORT = process.env.PORT || 0;

fastify.listen({ port: PORT }).then(() => {
  console.log(`Fastify server running on ${PORT}`);
});
