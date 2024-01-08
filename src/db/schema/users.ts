import {pgTable, serial, varchar} from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", {length: 256}),
  email: varchar("email", {length: 256}),
});
