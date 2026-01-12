import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => c.text("Hono backend running (setup)"));

const PORT = Number(process.env.PORT) || 5000;

serve({
  fetch: app.fetch,
  port: PORT
});

console.log(`Hono server running on ${PORT}`);
