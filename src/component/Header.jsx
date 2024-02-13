import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const header = () => {
  return<>
   <nav>
    <h1>Frontend developer</h1>
    <main>
        <HashLink to={"/#"}>Home</HashLink>
        <Link to={"/contact"}>contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
    </main>
  </nav>
  <div className='ab'></div>
  </>
}

export default header