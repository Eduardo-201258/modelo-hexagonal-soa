import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/productRepository";
import { pool } from "../database/db";

export class ProductRepository_impl implements ProductRepository {
  async save(product: Product): Promise<void> {
    const { id, name, price } = product;
    const query = "INSERT INTO products (id, name, price) VALUES ($1, $2, $3)";
    await pool.query(query, [id, name, price]);
  }

  async findAll(): Promise<Product[]> {
    const query = "SELECT * FROM products";
    const result = await pool.query(query);
    const products: Product[] = result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      price: row.price,
    }));
    console.log(products);
    return products;
  }
}
