import { Router } from "express";
import SectionController from "../controllers/SectionController";

const router = Router();

router.get("/", SectionController.all);
router.get("/:id", SectionController.getOneById);
router.post("/", SectionController.create);
router.patch("/:id", SectionController.update);
router.delete("/:id", SectionController.delete);

export default router;