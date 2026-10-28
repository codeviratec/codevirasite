// Next.js 16 static export writes route segment data as nested folders
// (about/__next.about/__PAGE__.txt), but the client router prefetches the
// flattened name (about/__next.about.__PAGE__.txt). Static hosts like GitHub
// Pages then return 404, so copy each nested file to its flattened name.
import { cpSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = "out";
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(full, dir);
    else walk(full);
  }
}

function flatten(segmentDir, parent) {
  for (const name of readdirSync(segmentDir)) {
    const full = join(segmentDir, name);
    if (statSync(full).isDirectory()) {
      flatten(full, parent);
    } else {
      const flat = relative(parent, full).split(sep).join(".");
      cpSync(full, join(parent, flat));
      copied++;
    }
  }
}

walk(root);
console.log(`fix-export: added ${copied} flattened segment files`);
