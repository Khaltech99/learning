import crypto from "crypto";

const { createHash } = crypto;

const hashedPassword = createHash("sha256").update("123").digest("hex");

console.log(hashedPassword.slice(0, 5));
