import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/productRepository";
import { pool } from "../../database/db";

export class ProductRepository_impl implements ProductRepository {
  async save(product: Product): Promise<void> {
    const {name, price } = product;
    console.log(product)
    const query = "INSERT INTO products (name, price) VALUES ($1, $2)";
    await pool.query(query, [name, price]);
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

  async findOne(productId: number): Promise<Product | null> {
    const query = "SELECT * FROM products WHERE id = $1";
    const values = [productId];
    const result = await pool.query(query, values);
  
    if (result.rows.length === 0) {
      return null;
    }
  
    const row = result.rows[0];
    const product: Product = {
      id: row.id,
      name: row.name,
      price: row.price,
    };
  
    return product;
  }  

}
