import React from 'react';
import { Ft } from '../../style/Footer';

export const Footer: React.FC = () => {
  return (
    <Ft.Container>
      <Ft.Text>SetApp - Front End Challenge</Ft.Text>
      <Ft.MenuLink>
        <a href={'https://www.linkedin.com/in/adam-cugier/'}>
          Adam Cugier
        </a>
      </Ft.MenuLink>
    </Ft.Container>
  )
};
