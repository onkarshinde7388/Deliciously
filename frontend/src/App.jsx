import React from 'react'
import { Toaster } from 'react-hot-toast'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Success from './Pages/Success'

const App = () => {
  return ( 
  <>
  <Toaster position="top-right" reverseOrder={false} />
  <Router>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="*" element = {<NotFound/>}/>
      <Route path="/success" element = {<Success/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App