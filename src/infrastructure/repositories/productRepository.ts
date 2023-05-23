import { Product } from "../../domain/product";
import { QueryResult } from "pg";
import { pool } from "../database/db";

export class ProductRepository {
    async save(product: Product): Promise<void> {
        const { id, name, price } = product;
        const query = "INSERT INTO products (id, name, price) VALUES ($1, $2, $3)";
        await pool.query(query, [id, name, price]);
    }

    async findById(id: number): Promise<Product | null> {
        const query = "SELECT * FROM products WHERE id = $1";
        const result = await pool.query(query, [id]);
        const productRow = result.rows[0];
        if (productRow) {
          const product: Product = {
            id: productRow.id,
            name: productRow.name,
            price: productRow.price,
          };
          return product;
        } else {
          return null;
        }
     }
}