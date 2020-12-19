import express, { json } from "express";
// Routes
import IndexRoutes from "./routes/index.routes";
import TaskRoutes from "./routes/tasks.routes";
import SongsRoutes from "./routes/songs.routers";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middleware
app.use(json());

// Routes
app.use(IndexRoutes);
app.use("/tasks", TaskRoutes);
app.use("/number-words-lines", SongsRoutes);
// app.get("/", (req, res) => res.send("Hello word!!"));

export default app;
