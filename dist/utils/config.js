"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: "@QEGTUI"
};
exports.ports = {
    port: process.env.NODE_ENV === "production" ? 8080 : 3001
};
