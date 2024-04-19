import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import Router from "./Router/router.js";
import { Connection } from "./data_base/db.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use("/", Router);
const port = 8000;

dotenv.config();

const Username = process.env.user_name;
const password = process.env.Password;
console.log(process.env.user_name); // Check if username is loaded correctly
console.log(process.env.Password);

app.listen(port, console.log(`server is running on port ${port} successfully`)
);
Connection(Username, password);
