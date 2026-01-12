import Koa from "koa";

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Koa backend running (setup)";
});

const PORT = process.env.PORT || 0;
app.listen(PORT, () => {
  console.log(`Koa server running on ${PORT}`);
});
