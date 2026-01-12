import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 })
});
