import express from "express";

// import { productsRouter } from "./products/infrastructure/rest-api/productRoutes";

const app = express();

app.use(express.json());

// app.use("/", productsRouter);

app.get("/" , (res,req)=>{ 
  req.status(200).send('Hola desde el nodo A');
})

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
})
