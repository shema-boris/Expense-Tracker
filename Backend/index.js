const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require( "dotenv");

dotenv.config();
const app=express();

//MIDDLEWARE
app.use(cors());

//DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION).then(() => {
    console.log('DB connection is successful')
}).catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on post $ {process.env.PORT}`);
})