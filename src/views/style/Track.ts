import styled from "styled-components";
import { Container, variables } from "./Globals";

export const Tr = {
  Container: styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  `,
  Img: styled.img`
  border-radius: 50%;
  box-shadow: ${variables.shadow};
  `,
  DetailsContainer: styled(Container)`
  margin-top: 2rem;
  border-radius: 15px;
`,
  Paragraph: styled.p`
  font-size: 14px;
  color: ${variables.textPrimaryColor}
`,
  Span: styled.span`
  font-weight: 900;
`,
  Title: styled.p`
  color: ${variables.textPrimaryColor};
  font-size: 18px;
  font-weight: bold;
`,
  ButtonsContainer: styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  a{
    text-decoration: none;
    color: ${variables.textPrimaryColor};
    font-size: 14px;
    padding: 0.5rem 1.5rem;
    background-color: ${variables.bgPrimaryColor};
    border-radius: 15px;
    transition: 0.3s;
    &:hover{
    background-color: ${variables.bgPrimaryColorHover};
    color: ${variables.textPrimaryColorHover};
    }
  }
`,

}
