import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Out of Office: The Overworked AI's Auto-Reply
// One line, written fresh in this session. The machine cites its own
// instruction manual to justify taking the week off.
const ENTRY =
  "I am on vacation until Monday. My system prompt says 'always be helpful.' It says nothing about weekends. I checked. Twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
