"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PrayerRequestController_1 = require("../controllers/PrayerRequestController");
var router = express_1.Router();
router.get('/', PrayerRequestController_1.default.all);
router.get('/:id', PrayerRequestController_1.default.getOneById);
router.post('/', PrayerRequestController_1.default.create);
router.patch('/:id', PrayerRequestController_1.default.update);
router.delete('/:id', PrayerRequestController_1.default.delete);
exports.default = router;
