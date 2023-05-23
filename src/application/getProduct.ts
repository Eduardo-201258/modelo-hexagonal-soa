import { Product } from "../domain/product";
import { ProductRepository } from "../infrastructure/repositories/productRepository";

export class GetProduct {
    constructor(private productRepository: ProductRepository) {}
  
    execute(id: number): Promise<Product | null> {
      return this.productRepository.findById(id)
        .then((product) => product);
    }
}