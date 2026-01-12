import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express backend running (setup)");
});

const PORT = process.env.PORT || 0;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
