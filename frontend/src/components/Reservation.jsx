import React, {useState} from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Reservation = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
  
   const navigate = useNavigate();

   const handleReservation = async (e) => {
       e.preventDefault();
       try {
        const {data} = await axios.post("http://localhost:3000/api/v1/reservation/send", {
          firstName,
          lastName,
          email,
          phone,
          date,
          time
        },
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true ,
        }
    );
    toast.success(data.message);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    navigate("/success");
   } catch (error) {
       toast.error(error.response?.data?.message || error.message);
       console.log(error);
   }
};

  return (
    <section className='reservation' id='reseravation'>
        <div className="container">
          <div className="banner">
            <img src="/reservation.png" alt="reservation" />
          </div>
          <div className="banner">
            <div className="reservation_form_box">
              <h1>Make a Reservation</h1>
              <form action="">
                <div>
                  <input type="text"  placeholder='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                  <input type="text"  placeholder='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                  <input type="date" placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
                  <input type="time" placeholder='time' value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div>
                  <input type="email" placeholder='email'className='email_tag' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="number" placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />

                  
                </div>
                <button onClick={handleReservation}> Reserve Now <span><HiOutlineArrowNarrowRight /></span></button>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Reservation