import { candidateTable } from "~/db/schema.ts";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export const getCandidate = async () => {
  const candidates = await db.select().from(candidateTable);
  console.log("candidate list", candidates);
  return candidates[0];
};
