import { uuid, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const candidateTable = pgTable("candidate", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});
export const ballotTable = pgTable("ballot", {
  id: uuid().defaultRandom().primaryKey(),
  voterId: uuid(),
  electionId: uuid(),
});
export const voterTable = pgTable("voter", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});
export const electionTable = pgTable("election", {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});
export const voteTable = pgTable("vote", {
  id: uuid().defaultRandom().primaryKey(),
  ballotId: uuid(),
  candidateId: uuid(),
  rank: integer(),
});
export const runningTable = pgTable("running", {
  id: uuid().defaultRandom().primaryKey(),
  electionId: uuid(),
  candidateId: uuid(),
});
