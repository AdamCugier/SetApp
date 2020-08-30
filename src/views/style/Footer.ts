import styled from "styled-components";
import { Container, variables } from "./Globals";
import { Nav } from "./Nav";

export const Ft = {
  Container: styled(Container)`
  background-color: ${variables.bgPrimaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
`,
  Text: styled.span`
  font-size: 12px;
  color: ${variables.textPrimaryColor};
  display: block;
  margin: 0.25rem;
`,
  MenuLink: styled(Nav.MenuLinks)`
  a{
  font-size: 12px;
  }
`
};
