import { Router } from "express";
import { restart } from "nodemon";
const songsController = require("./../controllers/songs.controller");

const router = Router();

router.get("/:lyric", songsController.getNumberOfWords);

export default router;
