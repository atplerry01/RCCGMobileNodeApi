import { Router } from "express";
import SubSectionController from "../controllers/SubSectionController";

const router = Router();

router.get("/", SubSectionController.all);
router.get("/getOne", SubSectionController.getOneById);
router.get("/create", SubSectionController.create);
router.get("/update", SubSectionController.update);
router.get("/delete", SubSectionController.delete);

export default router;