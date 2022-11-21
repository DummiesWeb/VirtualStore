import dotenv from "dotenv";

dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/Testdb";

export const PORT = process.env.PORT || 4000;

export const SECRET = process.env.SECRET;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;