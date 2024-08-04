import express from "express";
<<<<<<< HEAD
import { signup, login } from "../controller/user_controller.js";
import { uploadImage } from "../controller/imagecontroller.js";
import Upload from '../Utils/Upload.js';



const router = express.Router();

router.post("/sign", signup);
router.post("/login", login);
router.post("/file/upload", Upload.single('file'), uploadImage);
=======
import { signup } from "../controller/user_controller.js";

const router = express.Router();

router.post('/sign', signup);
>>>>>>> b047c7af968c2defde288ca932b322a98c4a7fc4

export default router;
