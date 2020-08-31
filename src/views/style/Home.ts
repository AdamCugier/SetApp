import styled from "styled-components";
import { variables } from "./Globals";

export const Ho = {
  Container: styled.div`
  background-image: url(${require('../../assets/photo1.jpg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  width:100%;
  height: auto;
  z-index: 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 5%;
`,
  Text: styled.span`
  font-size: 32px;
  color: ${variables.textPrimaryColor};
  z-index: 3;
  font-family: 'Russo One', sans-serif;

`,
  Gradient: styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: radial-gradient(ellipse at top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 55%); 
  top:0;
  left:0;
  z-index: 2;
`,
  Link: styled.div`
  margin-top: 3rem;
  position: relative;
  z-index: 5;
  a{
  padding: 1rem 2rem;
  background-color: ${variables.bgPrimaryColor};
  border-radius: 25px;
  text-decoration: none;
  color: ${variables.textPrimaryColor};
  transition: 0.3s;
  box-shadow: ${variables.shadow};
  cursor: pointer;
  &:hover{
  color: ${variables.textPrimaryColorHover};
  background-color: ${variables.bgPrimaryColorHover};
  }
  }
`
};
