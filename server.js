import express from "express";
import { configDotenv } from "dotenv";

const app= express();

configDotenv()

app.get('/',(req,res)=>{

    res.send("<h1>Welcome to Express Server</h1> <h2>Server is running on port 3000.</h2>")
})


const port=process.env.PORT


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})