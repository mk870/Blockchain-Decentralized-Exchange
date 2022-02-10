import React, { useContext } from 'react';
import {SiEthereum} from 'react-icons/si'
import { AppContext } from '../Context/AppContext';
import logo from '../Images/token2.jpg'
import { Ethcardstyles } from '../styles/Ethcardstyles';

export default function Ethcard() {
  const {ConnectedAccount2} = useContext(AppContext)
  const slicer = address => `${address.slice(0,5)}...${address.slice(address.length - 4)}`
  return(
    <Ethcardstyles>
      <div className="logos">
        <div className="circle">
          <SiEthereum fontSize={21} color='black' />
        </div>
        <img className='logo' src={logo}/>
      </div>
      <div className="info">
        <p>Address: {slicer(ConnectedAccount2)}</p>
        <p>Ethereum</p>
      </div>
    </Ethcardstyles>
  )
}
