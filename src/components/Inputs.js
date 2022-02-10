import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../styles/Button';
import {SiEthereum} from 'react-icons/si'
import mkt from '../Images/token2.jpg'
import { Inputstyles } from '../styles/InputStyles';
import { AppContext } from '../Context/AppContext';
import {ethers} from 'ethers'
import loader from '../Images/loader.gif'

const {ethereum} = window


export default function Inputs() {
  const [exchange,setexchange] = useState('buy')
  const[EthInput,setEthInput] = useState('')
  const [MktInput,setMktInput] = useState('')
  const[EthOutput,setEthOutput] = useState('')
  const [MktOutput,setMktOutput] = useState('')
  const{setConnectedAccount2} = useContext(AppContext)
  const{provider} = useContext(AppContext)
  const{MkhueTokenContract} = useContext(AppContext)
  const{EtherexhangeContract} = useContext(AppContext)
  const{ExchangeAddress} = useContext(AppContext)
  const{connect} = useContext(AppContext)
  const [ConnectedAccount,setConnectedAccount] = useState('none')
  const [EthBalance,setEthBalance] = useState(0)
  const [MktBalance,setMktBalance] = useState(0)

  useEffect(()=>{
    checkIfWalletConnected()
  },[connect])
  
  

  const checkIfWalletConnected = async()=>{
    
      if(!ethereum) return alert("Please install Metamask")
      const accounts = await ethereum.request({method:'eth_accounts'})
      if(accounts.length){
        const { chainId } = await provider.getNetwork()
        if(chainId !== 3) return alert('Please connect to Ropsten TestNet')
        const ethbalance = await provider.getBalance(accounts[0])
        const mktbalance = await MkhueTokenContract.balanceOf(accounts[0])
        setEthBalance((parseFloat(ethers.utils.formatEther(ethbalance))).toFixed(4))
        setConnectedAccount(accounts[0])
        setMktBalance((ethers.utils.formatEther(mktbalance.toString())))
        setConnectedAccount2(accounts[0])
        
      }else{
        alert('No accounts found, Please click the connect Button')
      }
      
  } 
    const purchasetokens = async()=>{
      if(!ethereum) return alert("Please install Metamask")
      else{
        if(EthInput && ConnectedAccount !== 'none'){
        
          setexchange('')
          const options = {value: ethers.utils.parseEther(EthInput)}
          const buytransaction = await EtherexhangeContract.purchasetoken(options)
          await buytransaction.wait()
          checkIfWalletConnected()
          setEthInput('')
          setMktOutput('')
          setexchange('buy')
        }else if(ConnectedAccount === 'none' && EthInput){
          alert('Please make sure your wallet is connected')
        }else if(ConnectedAccount && !EthInput){
          alert('Please make sure you filled the form correctly')
        }else{
        alert('Please make sure you filled the form correctly and your wallet is connected')
        }
      }
      
    } 
    const selltokens = async()=>{
      if(!ethereum) return alert("Please install Metamask")
      else{
        try{
          if(MktInput && ConnectedAccount !=='none'){
            
            setexchange('')
            const token_amount = ethers.utils.parseEther(MktInput)
            console.log(token_amount)
            const Approval = await MkhueTokenContract.approve(ExchangeAddress,token_amount)
            await Approval.wait()
            console.log(Approval)
            const selltransaction = await EtherexhangeContract.selltoken(token_amount)//,,
            await selltransaction.wait()
            checkIfWalletConnected()
            setMktInput('')
            setEthOutput('')
            setexchange('sell')
          }else if(ConnectedAccount === 'none' && MktInput){
            alert('Please make sure your wallet is connected')
          }else if(ConnectedAccount && !MktInput){
            alert('Please make sure you filled the form correctly')
          
          }else{
            alert('Please make sure you filled the form correctly and your wallet is connected')
          }
        }catch(error){
          console.error()
        }
      }
      
    }
  
    { if(exchange === 'buy'){
      return(
        <Inputstyles>
          <span className='buy'>Buy Tokens with Eth</span>
          <div className="buttons">
            <Button onClick={()=>{
              setEthOutput('')
              setMktInput('')
              setexchange('buy')}}>Buy</Button>
            <Button onClick={()=>{
              setMktOutput('')
              setEthInput('')
              setexchange('sell')}}>Sell</Button>
          </div>
          <div className="input-info">
            <h4>Input</h4>
            <h4>EtherBalance: {EthBalance}</h4>
          </div>
          <div className="input">
            <input type="number" 
            onChange={e=>{
              setEthInput(e.target.value)
              setMktOutput((e.target.value) * 10)
              }
            } 
            value={EthInput}/>
            <div className="logo-bar">
              <div className="circle">
                <SiEthereum fontSize={15} color='black' />
              </div>
              <p>ETH</p>
            </div>
          </div>
          <div className="output-info">
            <h4>Output</h4>
            <h4>MktBalance: {MktBalance}</h4>
          </div>
          <div className="input" >
            <input type="number" value={MktOutput} />
            <div className="logo-bar">
              <img src={mkt}/>
              <p>MKT</p>
            </div>
          </div>
          <div className="rates">
            <h4>ExchangeRate:</h4>
            <h4>1 ETH = 10Mkt tokens</h4>
          </div>
          <Button onClick={purchasetokens}>Exchange!</Button>
        </Inputstyles>
      )
    }else if (exchange === 'sell'){ 
    return(
      <Inputstyles>
        <span className='sell'>Sell Tokens for Eth</span>
        <div className="buttons">
          <Button onClick={()=>{
            setEthOutput('')
            setMktInput('')
            setexchange('buy')}}>Buy</Button>
          <Button onClick={()=>{
              setMktOutput('')
              setEthInput('')
              setexchange('sell')}}>Sell</Button>
        </div>
        <div className="input-info">
          <h4>Input</h4>
          <h4>MktBalance: {MktBalance}</h4>
        </div>
        <div className="input"  >
          <input type="number" onChange={e=>{
          setMktInput(e.target.value)
          setEthOutput(e.target.value / 10)
          }} value={MktInput}/>
          <div className="logo-bar">
            <img src={mkt}/>
            <p>MKT</p>
          </div>
        </div>
        <div className="output-info">
          <h4>Output</h4>
          <h4>EtherBalance: {EthBalance}</h4>
        </div>
        <div className="input">
          <input type="number" value={EthOutput}/>
          <div className="logo-bar">
            <div className="circle">
              <SiEthereum fontSize={15} color='black' />
            </div>
            <p>ETH</p>
          </div>
        </div>
        <div className="rates">
          <h4>ExchangeRate:</h4>
          <h4>10Mkt tokens = 1 ETH</h4>
        </div>
        <Button onClick={selltokens} >Exchange!</Button>
        
      </Inputstyles>
    )}else if(exchange === ''){
      return(
        <Inputstyles>
          <div className="loader">
            <img src={loader} alt="loading"/>
          </div>
        </Inputstyles>
      )
    }
    
  }
}
