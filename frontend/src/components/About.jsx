import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'

const About = () => {
  return (
   <section className='about' id='about'>
    <div className="container">
        <div className="banner">
            <div className="top">
                <h1>About Us</h1>
                <p> The only thing we're serious about is food </p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nemo recusandae similique, ab architecto ut debitis molestias officia, fugit ducimus dolores molestiae, magnam explicabo consequuntur placeat praesentium esse necessitatibus asperiores.
            </p>
            <Link to={"/"}>
            Explore Menu {" "}
            <span>
                <HiOutlineArrowRight className='arrowIcon' />
            </span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
    </div>
   </section>
  )
}

export default About