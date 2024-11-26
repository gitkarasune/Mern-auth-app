import express from "express";

import { signin, signup } from "../Controllers/auth.controller.js";

const router = express();

router.post("/signup", signup);
router.post("/signin", signin);

export default router; // when using the export default default, you can use a different name for the import.