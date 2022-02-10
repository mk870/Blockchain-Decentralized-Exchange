import styled from "styled-components";

export const WelcomeStyles = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-start;
  margin: 10px;
  //width: 50vw;
  .message{
    display:flex;
    flex-direction: column;
    justify-content:center;
    
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: solid white 2px;
    margin-top: 10px;
    border-radius: 20px;
    .one{
    border-right: white solid 2px;
    border-bottom: white solid 2px;
    padding: 20px;
    text-align:center;
    }
    .two{
      border-right: white solid 2px;
      border-bottom: white solid 2px;
      padding: 20px;
      text-align:center;
    }
    .three{
      border-bottom: white solid 2px;
      padding: 20px;
      text-align:center;
    }
    .four{
      border-right: white solid 2px;
      padding: 20px;
      text-align:center;
    }
    .five{
      border-right: white solid 2px;
      padding: 20px;
      text-align:center;
    }
    .six{
      padding: 20px;
      text-align:center;
    }
  }
  @media (max-width:720px){
    //width: 70vw;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`