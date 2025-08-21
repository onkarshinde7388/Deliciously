import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });
import cors from 'cors';
import dbConnection from './database/dbConnection.js';
import { errorHandler } from './error/errorHandler.js';
import reservationRoutes from './routes/reservationRoutes.js';

const app = express();

app.use(express.json()); // ✅ parse JSON body
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}))

app.use("/api/v1/reservation", reservationRoutes); 

app.use(errorHandler); 

dbConnection();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
export default app;