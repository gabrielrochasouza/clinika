import { useState } from "react";
import { ButtonContainer } from "./style";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ text,disabled=false }) => {
  
  return (
    <ButtonContainer 
        disabled={disabled}
    >
      {disabled && <AiOutlineLoading3Quarters />}
      {text}
    </ButtonContainer>
  );
};

export default Button;
