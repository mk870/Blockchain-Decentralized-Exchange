import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
  body{
    background-color:#0f0e13;
    /* background-image: 
      radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
      radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
      radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
    background-repeat: no-repeat;
    //background-size: cover;
    background-position: center;
    background-attachment: fixed;  */
  }
  .App{
    display:flex;
    flex-direction:column;
    justify-content:center;
  }
  .container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    color:white;
  }
  @media (max-width:720px){
    .container{
      display:flex;
      flex-direction:column;
      justify-content:center;
      color:white;
      text-align:center;
      
  }
  .App{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

`