import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync
} from "node:fs";
import { join, relative, sep } from "node:path";

if (!existsSync("out")) {
  throw new Error("Static export folder 'out' was not created.");
}

rmSync("dist", { recursive: true, force: true });
cpSync("out", "dist", { recursive: true });
mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8"
};

function extension(filename) {
  const dot = filename.lastIndexOf(".");
  return dot >= 0 ? filename.slice(dot).toLowerCase() : "";
}

function filesIn(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const absolute = join(directory, entry);
    return statSync(absolute).isDirectory() ? filesIn(absolute) : [absolute];
  });
}

const embeddedAssets = {};
for (const absolute of filesIn("out")) {
  const file = relative("out", absolute).split(sep).join("/");
  const route = `/${file}`;
  const value = {
    body: readFileSync(absolute).toString("base64"),
    type: mimeTypes[extension(file)] || "application/octet-stream"
  };
  embeddedAssets[route] = value;

  if (file === "index.html") embeddedAssets["/"] = value;
  if (file.endsWith("/index.html")) {
    embeddedAssets[`/${file.slice(0, -"index.html".length)}`] = value;
  }
}

const workerTemplate = readFileSync("scripts/static-worker.js", "utf8");
writeFileSync(
  "dist/server/index.js",
  workerTemplate.replace("__EMBEDDED_ASSETS__", JSON.stringify(embeddedAssets))
);
