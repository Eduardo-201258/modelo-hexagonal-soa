import { Product } from "../domain/product";
import { ProductRepository } from "../infrastructure/repositories/productRepository";


export class GetProduct {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products;
  }
}