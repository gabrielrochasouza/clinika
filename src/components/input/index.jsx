import { InputContainer } from "./style";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useState } from "react";

const Input = ({
  inputName,
  name,
  isPassword = false,
  register,
  isSelect = false,
  options,
  type = "text",
  style,
  mask,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {isSelect ? (
        <InputContainer style={style}>
          <select
            {...register(name)}
            required={true}
            type={visible ? "text" : "password"}
            className="input"
            placeholder={" "}
            name={name}
            {...rest}
          >
            {options}
          </select>
          <label className="user-label">{inputName}</label>

        </InputContainer>
      ):isPassword ? (
        <InputContainer style={style}>
          <input
            {...register(name)}
            required={true}
            type={visible ? "text" : "password"}
            className="input"
            placeholder={" "}
            name={name}
            {...rest}
          />
          <label className="user-label">{inputName}</label>
          <div className="eye-icon" onClick={() => setVisible(!visible)}>
            {visible ? <MdVisibility /> : <MdVisibilityOff />}
          </div>
        </InputContainer>
      ) : (
        <InputContainer>
          <input
            {...register(name)}
            required={true}
            type={type}
            className="input"
            name={name}
            placeholder={" "}
            {...rest}
            onInput={(e) => {
              if (mask) e.target.value = mask(e.target.value);
            }}
          />
          <label className="user-label">{inputName}</label>
        </InputContainer>
      )}
    </>
  );
};

export default Input;
