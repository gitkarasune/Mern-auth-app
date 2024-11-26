import express from "express";

import { signup } from "../Controllers/auth.controller.js";

const router = express();

router.post("/signup", signup);

export default router; // when using the export default default, you can use a different name for the import.