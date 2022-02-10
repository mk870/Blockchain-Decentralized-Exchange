import styled from "styled-components";

export const Ethcardstyles = styled.div`
  display: flex;
  flex-direction:column;
  height: 12em;
  width: 20em;
  border-radius: 15px;
  padding:15px;
  //margin-top: 40px;
  //margin-left: 12em;
  background-color:#a099ff;
  background-image: 
    radial-gradient(at 83% 67%, rgb(152, 231, 156) 0, transparent 58%), 
    radial-gradient(at 67% 20%, hsla(357,94%,71%,1) 0, transparent 59%), 
    radial-gradient(at 88% 35%, hsla(222,81%,65%,1) 0, transparent 50%), 
    radial-gradient(at 31% 91%, hsla(9,61%,61%,1) 0, transparent 52%), 
    radial-gradient(at 27% 71%, hsla(336,91%,65%,1) 0, transparent 49%), 
    radial-gradient(at 74% 89%, hsla(30,98%,65%,1) 0, transparent 51%), 
    radial-gradient(at 53% 75%, hsla(174,94%,68%,1) 0, transparent 45%);
  //background: rgba(255, 255, 255, 0.05);
  //border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  //justify-content:space-between;
  .logos{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    &>img{
      height: 40px;
      width: 40px;
      border-radius:50%;
    }
  }
  .info{
    display: flex;
    flex-direction:column;
    &>p{
      font-weight:800;
    }
  }
  .circle{
    display:flex;
    align-items:center;
    height: 40px;
    width: 40px;
    justify-content:center;
    border:2px solid white;
    border-radius:50%;
  }
`