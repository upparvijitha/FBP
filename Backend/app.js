
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();




app.use(express.json());
app.use(cors());
app.use("/books",router);

//middleware
// app.use('/',(req,res,next)=>
// {
//     res.send("this is starting app");
// })







mongoose.connect("mongodb+srv://admin:pUkxOcGhfS0CWwCR@cluster0.ocjk67p.mongodb.net/bookstore?retryWrites=true&w=majority")
.then(()=>console.log("connected to the database"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>console.log( err));



















//pUkxOcGhfS0CWwCR