import {drizzle} from "drizzle-orm/node-postgres";
import {Client, ClientConfig} from "pg";

const configOptions: ClientConfig = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
};

const client = new Client(configOptions);

(async () => {
  await client.connect();
  console.log("Connected successfully");
})();

export const db = drizzle(client);
