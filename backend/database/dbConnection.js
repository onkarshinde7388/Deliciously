import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });

const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "foods",
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
    
}

export default dbConnection;


