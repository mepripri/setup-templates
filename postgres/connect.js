import pg from "pg";

const { Client } = pg;

const client = new Client({
  connectionString:
    process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/setup_db"
});

client
  .connect()
  .then(() => console.log("Postgres connected (setup)"))
  .catch((err) => console.error("Postgres connection error:", err));
