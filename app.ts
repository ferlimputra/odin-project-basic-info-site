import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { AuthorRouter, BaseRouter, MessageRouter, UserRouter } from "./routers";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

const app: express.Application = express();
const PORT: number | string = process.env.PORT || 3000;

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware - Parser
app.use(express.urlencoded({ extended: true }));

// Middleware - Routers
app.use(AuthorRouter);
app.use(BaseRouter);
app.use(MessageRouter);
app.use(UserRouter);

// Start the server
app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
    throw error;
  }

  console.log(`Server is running on port ${PORT}`);
});
