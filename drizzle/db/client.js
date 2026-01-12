import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const client = new Client({
  connectionString:
    process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/setup_db"
});

await client.connect();
console.log("Postgres connected (Drizzle setup)");

export const db = drizzle(client, { schema });
