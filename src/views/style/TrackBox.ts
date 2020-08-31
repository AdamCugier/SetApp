import { Container, variables } from "./Globals";
import styled from "styled-components";

const Text = styled.span`
  font-size: 14px;
  color: ${variables.textPrimaryColor};
`;

export const Box = {
  Container: styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props: { background: boolean }) => props.background ? variables.bgPrimaryColor : 'none'};
  border-radius: 45px;
  padding-left: 40px;
  padding-right: 40px;
  transition: 0.3s;
  cursor: pointer;
  &:hover{
  background-color: ${variables.bgPrimaryColorHover};
  }
  @media (max-width: ${variables.sm}px){
  padding-left: 20px;
  }
`,
  LeftSide: styled.div`
  display: flex;
  align-items: center;
`,
  Lp: styled(Text)`
  font-weight: 900;
  margin-right: 2rem;
  @media (max-width: ${variables.sm}px){
  display: none;
  }
`,
  Image: styled.img`
  border-radius: 50%;
`,
  Title: styled(Text)`
  margin-left: 2rem;
`
};
