import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'

/**
 * The Homepage function returns a div that contains the Navbar and Header components.
 * @returns The Navbar and Header components are being returned.
 */
function Homepage() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  )
}

export default Homepage;