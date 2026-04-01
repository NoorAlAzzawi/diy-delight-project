import express from "express";
import {
  getAllBuilds,
  getBuildById,
  createBuild,
  updateBuild,
  deleteBuild,
} from "../controllers/buildsController.js";

const router = express.Router();

router.get("/items", getAllBuilds);
router.get("/items/:id", getBuildById);
router.post("/items", createBuild);
router.put("/items/:id", updateBuild);
router.delete("/items/:id", deleteBuild);

export default router;
