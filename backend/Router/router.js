import express from "express";
import { signup } from "../controller/user_controller.js";

const router = express.Router();

router.post('/sign', signup);

export default router;
