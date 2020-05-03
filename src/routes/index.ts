import { Router } from "express";
import hotspot from "./hotspot";
import section from "./section";
import subsection from "./subsection";
import test from "./test";

const routes = Router();

routes.use("/tests", test);
routes.use("/sections", section);
routes.use("/subsections", subsection);
routes.use("/hotspots", hotspot);

export default routes;
