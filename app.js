const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors")
const mongoose = require("mongoose");
const TodoModel = require("./model/todoSchema");
const router = require("./routes");
const userModel = require("./model/user");
const bcrypt = require('bcryptjs');
const PORT = process.env.PORT || 5000;

const DBURI = "mongodb+srv://hafiztalhanizam:mongodbtalha@cluster0.lplkbiq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DBURI)
    .then((res) => console.log("mongo DB connected"))
    .catch((err) => console.log("DB ERROE", err));

//BODY-PARSER
app.use(cors())
app.use(express.json())

//all routes
app.use(router)


app.listen(PORT, console.log(`server running successfully on http://localhost:${PORT}`))