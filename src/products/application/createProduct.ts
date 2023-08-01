import { Product } from "../domain/product";
import { ProductRepository } from "../domain/productRepository";

export class CreateProduct {
 
  constructor(private productRepository: ProductRepository) {
  }

  execute(product: Product): Product {
    this.productRepository.save(product);

    return product;
  }
}
