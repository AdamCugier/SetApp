import styled from "styled-components";

//Global Variables
export const variables = {
  textPrimaryColor: '#505050',
  textPrimaryColorHover: '#101010',
  bgPrimaryColor: '#f2f2f2',
  shadow: '3px 3px 10px rgba(0,0,0,0.15);',
  sm: 480,
  md: 768,
  lg: 1366,
  xl: 1920,
};

//Global styled components
export const Container = styled.div`
padding: 1rem;
`;

export const AppContainer = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
`;

export const AppContent = styled(Container)`
display: flex;
flex-grow: 1;
justify-content: center;
`;

