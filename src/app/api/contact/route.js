import { google } from "googleapis";

const credentialsBase64 = process.env.GOOGLE_CREDENTIALS_BASE64;

if (!credentialsBase64) throw new Error("Missing Google credentials");

const credentials = JSON.parse(Buffer.from(credentialsBase64, "base64").toString("utf8"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
