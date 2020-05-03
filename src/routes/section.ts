import { Router } from "express";
import SectionController from "../controllers/SectionController";

const router = Router();

router.get("/", SectionController.all);
router.get("/:id([0-9]+)", SectionController.getOneById);
router.post("/", SectionController.create);
router.patch("/:id([0-9]+)", SectionController.update);
router.delete("/:id([0-9]+)", SectionController.delete);

export default router;