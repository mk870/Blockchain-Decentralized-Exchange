import React, { useContext } from 'react';
import { Button } from '../styles/Button';
import { WelcomeStyles } from '../styles/Welcomestyles';
import { AppContext } from '../Context/AppContext';


export default function Welcome() {
  const{connectWallet} = useContext(AppContext)
  return(
    <WelcomeStyles>
      <div className="message">
        <h1>Decentralized Exchange for Ether
          <br/>
          and MKT token</h1>
        <p>Explore the crypto world.Buy and sell Ether for MKT tokens easily on Krypt.</p>
      </div>
      <Button onClick={connectWallet}>Connect To Wallet</Button>
      <div className="grid">
        <div className='one'>
          Reliability
        </div>
        <div className='two'>
          Security
        </div>
        <div className='three'>
          Ethereum
        </div>
        <div className='four'>
          Web 3.0
        </div>
        <div className='five'>
          Low fees
        </div>
        <div className='six'>
          Blockchain
        </div>
      </div>
    </WelcomeStyles>);
}
