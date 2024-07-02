import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from "express";

const app = express()
dotenv.config();

    (async () => {
        try {

            await mongoose.connect(`${process.env.uri}`)
            app.on("error", (error) => {
                console.log("Error:", error);
            })

            app.listen(process.env.PORT, () => {
                console.log(`app is listening on port ${process.env.PORT}`);

            })

        }
        catch (error) {
            console.log("ERROR: ", error);
        }
    })