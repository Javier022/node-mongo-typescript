import { config } from "dotenv";

config();

export const port = process.env.PORT || 3500;
