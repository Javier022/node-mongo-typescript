import { Router } from "express";
const router = Router();
import * as videoController from "../controllers/videos.controller";

router.get("/videos", videoController.getVideos);

router.get("/videos/:id", videoController.getAVideo);

router.post("/videos", videoController.createVideo);

router.put("/videos/:id", videoController.updateVideo);

router.delete("/videos/:id", videoController.deleteVideo);

export default router;
