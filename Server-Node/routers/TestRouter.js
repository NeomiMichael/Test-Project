const express = require("express")
const router = express.Router()
const { authenticateToken, checkRole } = require('../middleware/UserAuthentication');


const {createTest,getTest,getAllTest,deleteTest,updateTest,getTestAverageScore}= require("../controllers/TestController")
console.log("router");

router.post("/createTest",createTest);
router.get("/getTest/:id", getTest); 
router.get("/getAllTest/", getAllTest);  
router.delete("/deleteTest/:id", authenticateToken, checkRole(['teacher']),deleteTest);
router.put("/updateTest/:id", updateTest);
router.get('/average/:id',getTestAverageScore);


module.exports= router
