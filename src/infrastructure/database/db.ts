import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "eduardo",
  host: "localhost",
  database: "hexagonal",
  port: 5432,
});

