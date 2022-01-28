const express = require ("express")
const cors = require("cors")

const products = require("./product")

const app = express()

app.use(express.json()) // middle ware
app.use(cors())//cross origin resource sharing 

app.get("/" , (req , res) =>{
    res.send("Welcome to Online Shop API...")
   
});
app.get("/products" , (req,res) =>{
    res.send(products);
});

const port  = process.env.PORT || 5001

app.listen(port, console.log(`the App is running in the port ${port}`))