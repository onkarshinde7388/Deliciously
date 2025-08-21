import { Router } from "express"; 
import { sendReservation } from "../controllers/reservation.js";  

const router = Router();

router.post("/send", sendReservation, (req, res) =>{
       console.log("Body received:", req.body);
});

export default router;