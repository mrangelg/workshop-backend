import express, { json } from "express";
// Routes
import IndexRoutes from "./routes/index.routes";
import TaskRoutes from "./routes/tasks.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middleware
app.use(json());

// Routes
app.use(IndexRoutes);
app.use("/tasks", TaskRoutes);
// app.get("/", (req, res) => res.send("Hello word!!"));

export default app;
