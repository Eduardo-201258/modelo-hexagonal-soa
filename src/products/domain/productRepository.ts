import { Product } from "./product";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findAll(): Promise<Product[]>;
  findOne(productId: number): Promise<Product | null>;
}
