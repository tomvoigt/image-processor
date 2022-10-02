import express from "express";
import { router } from "./router";

const app = express();
const port = 3000;

app.use("/api", router);
app.listen(port, () => {
  console.log(`Image processor listening on ${port}`);
});

export default app;
