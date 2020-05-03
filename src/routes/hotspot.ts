import { Router } from "express";
import HotspotController from "../controllers/HotspotController";

const router = Router();

router.get("/", HotspotController.all);
router.get("/getOne", HotspotController.getOneById);
router.get("/create", HotspotController.create);
router.get("/update", HotspotController.update);
router.get("/delete", HotspotController.delete);

export default router;