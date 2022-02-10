import styled from "styled-components";

export const Inputstyles = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  
  padding:15px;
  margin: 10px 0 10px 0;
  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  .input-info{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
  }
  .output-info{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
  }
  .input{
    display:flex;
    flex-direction:row;
    .logo-bar{
      display: flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      padding:2px;
      border-left: 2px solid red;
      background: silver;
      width: 25%;
      height: 35px;
      &>p{
        color:black;
        font-weight:800;
      }
    }
    img{
      width:30px;
      height:30px;
      border-radius:50%;
    }
    input{
      border: none;
      background: silver;
      //border-radius:10px;
      outline: none;
      text-align:center;
      width: 75%;
      font-size:20px;
    }
  }
  .buttons{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .circle{
    display:flex;
    align-items:center;
    height: 30px;
    width: 30px;
    justify-content:center;
    border:2px solid white;
    border-radius:50%;
  }
  .loader{
    display: flex;
    justify-content:center;
    align-items:center;
    &>img{
      width: 100%;
      height:100%;
    }
  }
  .buy{
    align-self:center;
    margin-bottom:5px;
    padding: 8px;
    border-radius:10px;
    background-color: rgb(0,212,212);
    width: 100%;
    text-align:center;
  }
  .sell{
    align-self:center;
    margin-bottom:5px;
    padding: 8px;
    border-radius:10px;
    background-color: crimson;
    width: 100%;
    text-align:center;
  }
`