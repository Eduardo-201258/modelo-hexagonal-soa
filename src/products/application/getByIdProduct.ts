import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export class GetProductId {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: number): Promise<Product | null> {
    const product = await this.productRepository.findOne(productId);
    return product;
  }
}