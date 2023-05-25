import { CreateProduct } from "../../application/createProduct";
import { GetProduct } from "../../application/getProduct";
import { ProductRepository_impl } from "../repositories/productRepository_impl";
import { ProductControllers } from "./productControllers";

const repositoryImpl = new ProductRepository_impl();
const repositoryImpl2 = new ProductRepository_impl();

export const createProduct = new CreateProduct(repositoryImpl);
export const listProduct = new GetProduct(repositoryImpl2);

export const productController = new ProductControllers(
  createProduct,
  listProduct
);
