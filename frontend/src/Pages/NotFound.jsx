import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <section className='notFound' id='notFound'>
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>404 - Not Found</h1>
          <Link to="/">Go to Home</Link>
        </div>
      </section>
    </>
  )
}

export default NotFound