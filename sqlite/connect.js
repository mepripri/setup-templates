import Database from "better-sqlite3";

const dbPath = process.env.SQLITE_PATH || "./setup.db";

const db = new Database(dbPath);
console.log("SQLite connected (setup)");

export default db;
