import { Request, Response } from "express";
import { CreateProduct } from "../../application/createProduct";
import { GetProduct } from "../../application/getProduct";
import { GetProductId } from "../../application/getByIdProduct";

export class ProductControllers {
  constructor(
    private readonly createProduct: CreateProduct,
    private readonly getProduct: GetProduct,
    private readonly getProductId: GetProductId
    
  ) {}

  async obtenerProductId(request: Request, response: Response) {
    try {
      const productId = parseInt(request.params.productId);
      const product = await this.getProductId.execute(productId);
      response.json(product);
      console.log(product);
      
    } catch (error) {
      response.status(400).json({ error: "Error al obtener el producto por ID" });
    }
  }
  
  async crearProduct(request: Request, response: Response) {
    const product = request.body;
    console.log(product)

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
