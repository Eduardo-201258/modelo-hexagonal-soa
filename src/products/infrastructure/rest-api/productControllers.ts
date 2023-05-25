import { Request, Response } from "express";

import { CreateProduct } from "../../application/createProduct";
import { GetProduct } from "../../application/getProduct";

export class ProductControllers {
  static obtenerProduct: any;
  static crearProduct: any;
  constructor(
    private readonly createProduct: CreateProduct,
    private readonly getProduct: GetProduct
  ) {}

  async crearProduct(request: Request, response: Response) {
    const product = request.body;

    try {
      const products = await this.createProduct.execute(product);

      response.json(products);
    } catch (error) {
      response.status(400).json({ error: "Error al crear los productos" });
    }
  }

  async obtenerProduct(request: Request, response: Response) {
    try {
      const products = await this.getProduct.execute();

      response.json(products);
      console.log(products);
    } catch (error) {
      response.status(400).json({ error: "Error al obtener los productos" });
    }
  }
}
