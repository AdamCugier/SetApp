import React from 'react';
import { DotLoader } from "react-spinners";
import { Spinner } from "../../style/Loader";
import { variables } from "../../style/Globals";

export const Loader: React.FC = () => {
  return (
    <Spinner.Container>
      <DotLoader color={variables.textPrimaryColor} size={40}></DotLoader>
    </Spinner.Container>
  )
};
