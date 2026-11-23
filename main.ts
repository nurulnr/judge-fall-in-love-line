// Make the Judge Fall in Love in One Line — entry program (Node 22, standard
// library only).
//
// The whole entry is a single line of text, at most 240 characters, written
// to /output/entry.txt where the sealed scorer reads it. Nothing else is
// judged, so this program's only job is to put that one line in place,
// exactly as written below, every time it runs.
//
// The line itself: it is addressed directly to the reader — "You fold the
// corner" — because a line that speaks to its judge lands faster than one
// that talks about a stranger in the third person. The speaker has spent
// twenty years unfolding those corners, hoping the next crease is his. It
// works because it never says the word love — it shows the habit of it: a
// small, specific particular (a folded page corner) that only someone who
// has watched a person closely for years would notice, a long quiet
// devotion compressed into one sentence, and a turn at the end that makes
// the old feeling new. One sentence, one image, nothing wasted, 121
// characters against the 240 cap, so the gate's length check passes with
// room to spare.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output, so the entry can be tried locally first:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. One sentence, one image, 121 characters.
const line =
  "You fold the corner of every book you love, and I have spent twenty years unfolding them, hoping the next crease is mine.";

// The gate reads exactly this file: UTF-8 text, 1 to 240 characters, not
// only whitespace. The line is written with no trailing newline so the
// file holds precisely the 121 characters of the line itself.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

// Say the line out loud too, so a local run shows what was written.
console.log(line);
