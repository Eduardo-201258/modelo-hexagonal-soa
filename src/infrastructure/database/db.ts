import '../../load-env-vars'; 
import { Pool } from "pg";

// console.log(process.env)
// console.log(process.env.USER)

export const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: 5432,
});

async function verificarTablaExistente() {
  const query = `
    SELECT EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_name = 'products'
    )
  `;
  const result = await pool.query(query);
  const tablaExistente = result.rows[0].exists;

  return tablaExistente;
}

async function crearTabla() {
  const tablaExistente = await verificarTablaExistente();

  if (!tablaExistente) {
    const query = `
      CREATE TABLE products (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        price BIGINT
      )
    `;
    await pool.query(query);
    console.log('Tabla creada exitosamente');
  } else {
    console.log('La tabla ya existe, no se necesita crear nuevamente');
  }
}

crearTabla()
  .catch((error) => console.error('Error al crear la tabla:', error))
  .finally(() => pool.end());
