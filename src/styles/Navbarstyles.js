import styled from "styled-components";

export const Navbarstyles = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  color:white;
  .first{
    display:flex;
    flex-direction:row;
    align-items:center;

    &>img{
      width:90px;
      height:60px;
      border-radius:10px;
      border: 2px solid silver;
      margin-right:1em;
    }
  }
  .second{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    &>h4{
      margin:0.5em;
    }
  }
  @media (max-width:720px){
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    .first{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
    }
    .second{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      padding:2px;
      &>h4{
        margin:0.2em;
      }
    }
  }
  @media (max-width:700px){
    //display: flex;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    .first{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
    }
  }
  
`
