import React,{useState} from "react";
import {ethers} from 'ethers'
import {TokenAddress,ExchangeAddress,MkhueTokenAbi,EtherexchangeAbi} from './components/Constants'
import Exchangeinputs from "./components/Exchangeinputs";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { Globalstyles } from "./styles/Globalstyles";
import {AppContext} from './Context/AppContext'

const {ethereum} = window
const provider = new ethers.providers.Web3Provider(ethereum)
const signer = provider.getSigner()
const MkhueTokenContract = new ethers.Contract(TokenAddress,MkhueTokenAbi,signer)
const EtherexhangeContract = new ethers.Contract(ExchangeAddress,EtherexchangeAbi,signer)

ethereum.on('chainChanged', (chainId) => {
  console.log(chainId)
  window.location.reload();
})
ethereum.on('accountsChanged',(accounts)=>{
  console.log(accounts)
  window.location.reload()
})

function App() {
  const [ConnectedAccount2,setConnectedAccount2] = useState('')
  const [connect,setconnect] = useState(false)

  const connectWallet = async()=>{
    if(!ethereum) return alert("Please install Metamask")
    else{
      const accounts = await ethereum.request({method:'eth_requestAccounts'})
      setconnect(true)
    }
  }
  
  return (
    <AppContext.Provider value={{connectWallet,provider,signer,MkhueTokenContract,EtherexhangeContract,connect,setConnectedAccount2,ConnectedAccount2,ExchangeAddress}}>
      <div className="App">
        <Globalstyles/>
        <Navbar/>
        <div className="container">
          <Welcome/>
          <Exchangeinputs/>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
