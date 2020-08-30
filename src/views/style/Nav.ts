import styled from "styled-components";
import { Container, variables } from "./Globals";

export const Nav = {
  Container: styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${variables.bgPrimaryColor};
  box-shadow: ${variables.shadow};
  `,
  LeftSection: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  `,

  Logo: styled.img`
    height: 25px;
  `,

  LogoText: styled.span`
  font-size: 14px;
  color: ${variables.textPrimaryColor}
  `,

  MenuLinks: styled.div`
  a{
    text-decoration: none;
    color: ${variables.textPrimaryColor};
    font-size: 14px;
    margin: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
    padding: 0.25rem 0;
    &:hover{
    color: ${variables.textPrimaryColorHover};
    border-bottom: 1px solid ${variables.textPrimaryColorHover};
    }
  }
  `

};
