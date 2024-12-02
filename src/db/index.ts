import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { candidateTable } from "./schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const candidate: typeof candidateTable.$inferInsert = {
    name: "Elaina",
  };

  await db.insert(candidateTable).values(candidate);
  console.log("im here");
}
main();
