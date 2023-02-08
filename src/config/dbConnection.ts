import mongoose from "mongoose";
import { Helper } from "../classes/Helper";

export const setupDBConnection = () => {
  mongoose.connect(
    "mongodb://localhost:27017"
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Database connection established successfully");

  });
};
mongoose.set("strictQuery", true)
