import { Pool } from "pg";
import process from "process";

const DEFAULT_DB_PORT = "5432";

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || DEFAULT_DB_PORT),
});
