import styled from "styled-components";
import { Container, variables } from "./Globals";

export const List = {
  Container: styled(Container)`
  display: flex;
  justify-content: center;
  width:100%;
  flex-direction: column;
`,
  Title: styled.h1`
  font-size: 24px;
  color: ${variables.textPrimaryColor};
  text-align: center;
  margin-bottom: 2rem;
`
};
