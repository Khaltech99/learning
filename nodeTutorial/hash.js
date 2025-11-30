import crypto, { createHash } from "crypto";
const hash = createHash("sha256");

const hashed = hash.update("this is me").digest("hex");

console.log(hashed.slice(0, 5).toUpperCase());
