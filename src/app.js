import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"


const app=express()
 app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
 }))

 app.use(express.json({limit:"16kb"}))//accept json from form with limits
 app.use(express.urlencoded({extended:true, limit:"16kb"})) 
 //accept data from url "extended" means u can give nested object .
 app.use(express.static("public")) //public folder to store the images 


export {app}