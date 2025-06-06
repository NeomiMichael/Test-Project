require('dotenv').config(); 
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require("fs")

const UserRouter = require("./routers/UserRouter");
const TestRouter = require("./routers/TestRouter");
const ResultTest = require("./routers/ResultTestsRoter")
const EmailRouter = require("./routers/EmailRouter");

const bodyParser = require("body-parser")

const connectDb = process.env.DB_CONNECT;  
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001"] }));

mongoose.connect(connectDb).then(() => {
    console.log('connected');
}).catch(err => {
    console.log(err);
});

app.use("/User", UserRouter);
app.use("/Test", TestRouter);
app.use("/Result", ResultTest);
app.use("/Email",EmailRouter)
app.listen(process.env.APP_PORT, () => {
    console.log("runnn");
});
