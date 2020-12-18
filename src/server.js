import express from "express";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Routes
app.get("/", (req, res) => res.send("Hello word!!"));

export default app;
