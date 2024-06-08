import { createPool } from 'mysql2/promise';

export async function connectToDatabase() {
  const pool = createPool({
    host: process.env.DB_HOST || 'localhost', // Default to localhost if not set
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // Additional connection options (optional)
    // connectionLimit: 10, // Maximum number of connections in the pool
  });

  return pool;
}