import { Router } from "express";
import { restart } from "nodemon";
const tasksController = require("./../controllers/tasks.controller");

const router = Router();

router.get("/", tasksController.list);

router.get("/:id", tasksController.getTask);

router.post("/", tasksController.create);

router.put("/:id", tasksController.update);

router.delete("/:id", tasksController.remove);

export default router;
