import mysql from "mysql2/promise";

const config = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DB || "setup_db"
};

const connect = async () => {
  try {
    const conn = await mysql.createConnection(config);
    console.log("MySQL connected (setup)");
    await conn.end();
  } catch (err) {
    console.error("MySQL connection error:", err);
  }
};

connect();
