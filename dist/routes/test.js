"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TestController_1 = require("../controllers/TestController");
var router = express_1.Router();
router.get("/", TestController_1.default.all);
router.get("/me", TestController_1.default.me);
exports.default = router;
