import React from 'react'

import { Navbarstyles } from '../styles/Navbarstyles'
import image from '../Images/3.jpg'

export default function Navbar() {
  return (
    <Navbarstyles>
      <div className='first'><img src={image}/><h2>KRPYT Exchange</h2></div>
      <div className='second'>
        <h4>Market</h4>
        <h4>Exchange</h4>
        <h4>Tutorials</h4>
        <h4>Wallets</h4>
        
      </div>
    </Navbarstyles>
  )
}
