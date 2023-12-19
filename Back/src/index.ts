// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Restaurant } from "../../sharedTypes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const testResto: Restaurant = {
  name: "test",
  type: "Italian",
  postalCode: 12345,
  city: "test",
  street: "test",
};

app.get("/", (req: Request, res: Response) => {
  res.send(
    `Express + TypeScript Server, and here's some fake info: ${JSON.stringify(
      testResto
    )}`
  );
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
