import dotenv from "dotenv";
import path from "path";

import express, { Application, Request, Response, NextFunction } from "express";

dotenv.config({
  path: path.resolve(__dirname, "..", `env.${process.env.NODE_ENV}`),
});

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
