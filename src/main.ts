import express from "express";

import { productsRouter } from "./products/infrastructure/rest-api/productRoutes";

const app = express();

app.use(express.json());

app.use("/", productsRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
})
