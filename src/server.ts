import express, { Request, Response } from "express";
import { CreateProduct } from "./application/createProduct";
import { GetProduct } from "./application/getProduct";
import { ProductRepository } from "./infrastructure/repositories/productRepository";

const app = express();
app.use(express.json());

const productRepository = new ProductRepository();
const createProduct = new CreateProduct(productRepository);
const getProduct = new GetProduct(productRepository);

app.post("/products", (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct = createProduct.execute(name, price);
  res.json(newProduct);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const product = getProduct.execute(Number(id));
  res.json(product);
  console.log(product)
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});