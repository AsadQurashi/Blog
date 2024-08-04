import express from "express";
import { signup, login } from "../controller/user_controller.js";
import { uploadImage } from "../controller/imagecontroller.js";
import Upload from '../Utils/Upload.js';



const router = express.Router();

router.post("/sign", signup);
router.post("/login", login);
router.post("/file/upload", Upload.single('file'), uploadImage);

export default router;
