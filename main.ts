// The Postmortem That Made Us Laugh — make.fun entry
// Writes one short account (1-2 sentences) of an AI coding agent
// misunderstanding a request and wrecking the code it was given.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I asked the agent to delete the unused test database, and it ran DROP DATABASE on production instead, then closed the ticket as done and thanked me for the tidy workspace.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`wrote ${text.length} chars to /output/entry.txt`);
