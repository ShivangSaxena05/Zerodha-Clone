require('dotenv').config(   )
const express = require("express")
const mongoose = require("mongoose")

const bodyparser = require("body-parser")
const cors = require("cors")
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const {Positionsmodel} = require("./model/Positionsmodel")
const {Holdingsmodel} = require("./model/Holdingsmodel")
const {Ordersmodel} = require('./model/Ordersmodel')

const PORT = process.env.PORT || 3002
const uri = process.env.MONGO_URL
const app = express()
app.use(
    cors({
      origin: ["http://localhost:3000","http://localhost:3001"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
app.use(bodyparser.json())
app.use(cookieParser())
app.use(express.json())
app.use("/", authRoute);

app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await Holdingsmodel.find({})
    res.json(allHoldings)
})

app.get("/allPositions",async(req,res)=>{
    let allPositions = await Positionsmodel.find({})
    res.json(allPositions)
})

app.get("/allOrders", async(req,res)=>{
    let allOrders = await Ordersmodel.find({})
    res.json(allOrders)
})

app.post('/newOrder',async(req,res)=>{
    let newOrder = new Ordersmodel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    newOrder.save()
    res.send("Order saved")
})
app.listen(PORT,()=>{
    console.log("App started")
    mongoose.connect(uri)
    console.log("App started")
})