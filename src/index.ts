import path from "path";
import { config } from "dotenv";

import express, { Application, Request, Response } from "express";
import { test } from "@src/test";

const PORT = parseInt(process.env.PORT ?? "5050");
const NODE_ENV = process.env.NODE_ENV ?? "development";

const app: Application = express();

config({
  path: path.resolve(__dirname, "..", `.env.${NODE_ENV}`),
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
  test();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
