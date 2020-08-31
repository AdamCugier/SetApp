import styled from "styled-components";
import { Container, variables } from "./Globals";

export const List = {
  Container: styled(Container)`
  display: flex;
  justify-content: flex-start;
  width:50%;
  flex-direction: column;
  transition: 0.3s;
  @media (max-width: ${variables.sm}px){
  width: 100%;
  }
  @media (min-width: ${variables.sm + 1}px) and (max-width: ${variables.md}px){
  width:80%;
  }
  @media (min-width: ${variables.md + 1}px) and (max-width: ${variables.lg}px){
  width:70%;
  }
  @media (min-width: ${variables.lg + 1}px) and (max-width: ${variables.xl}px){
  width:60%;
  }
`,
  Title: styled.h1`
  font-size: 24px;
  color: ${variables.textPrimaryColor};
  text-align: center;
  margin-bottom: 2rem;
`,
  Input: styled.input`
  width:50%;
  min-width: 200px;
  align-self: center;
  height: 24px;
  margin-bottom: 2rem;
  border-radius: 25px;
  outline: none;
  padding: 0.5rem 1.5rem;
  box-shadow:  ${variables.shadow};
  border: none;
  
`
};
