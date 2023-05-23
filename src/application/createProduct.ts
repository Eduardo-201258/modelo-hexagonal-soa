import { Product } from "../domain/product";
import { ProductRepository } from "../infrastructure/repositories/productRepository";

export class CreateProduct {
  private lastProductId: number;

  constructor(private productRepository: ProductRepository) {
    this.lastProductId = 0;
  }

  execute(name: string, price: number): Product {
    const newProductId = this.lastProductId + 1;
    const newProduct: Product = {
      id: newProductId,
      name,
      price,
    };

    this.productRepository.save(newProduct);

    this.lastProductId = newProductId;

    return newProduct;
  }
}