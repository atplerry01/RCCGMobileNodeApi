"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var LiveReportController_1 = require("../controllers/LiveReportController");
var router = express_1.Router();
router.get('/', LiveReportController_1.default.all);
router.get('/:id', LiveReportController_1.default.getOneById);
router.post('/', LiveReportController_1.default.create);
router.patch('/:id', LiveReportController_1.default.update);
router.delete('/:id', LiveReportController_1.default.delete);
exports.default = router;
