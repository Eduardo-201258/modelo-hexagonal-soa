import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export class GetProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products;
  }
}
