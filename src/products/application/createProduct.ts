import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export class CreateProduct {
  private lastProductId: number;

  constructor(private productRepository: ProductRepository) {
    this.lastProductId = 0;
  }

  execute(product: Product): Product {
    const newProductId = this.lastProductId + 1;

    this.productRepository.save(product);

    this.lastProductId = newProductId;

    return product;
  }
}
