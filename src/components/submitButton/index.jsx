import { useState } from "react";
import { ButtonContainer } from "./style";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ text,disabled=false , ...rest}) => {
  
  return (
    <ButtonContainer 
        disabled={disabled}
        {...rest}
    >
      {disabled && <AiOutlineLoading3Quarters />}
      {text}
    </ButtonContainer>
  );
};

export default Button;
