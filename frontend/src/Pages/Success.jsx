import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom' 
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setInterval(() => {
     setCountdown((prev) => {
       if(prev == 1) {
         clearInterval(timeout);
         navigate("/");
       }
       return prev - 1;
     });
    }, 1000);
    return () => clearInterval(timeout);
  },[navigate])
  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1> Redirecting to Home in {countdown} seconds..</h1>
          <Link to= "/">Go Back to Home <span><HiOutlineArrowNarrowRight /></span></Link>
        </div>
      </section>
    </>
  )
}

export default Success