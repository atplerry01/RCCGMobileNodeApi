"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SectionController_1 = require("../controllers/SectionController");
var router = express_1.Router();
router.get('/', SectionController_1.default.all);
router.get('/:id', SectionController_1.default.getOneById);
router.post('/', SectionController_1.default.create);
router.patch('/:id', SectionController_1.default.update);
router.delete('/:id', SectionController_1.default.delete);
exports.default = router;
