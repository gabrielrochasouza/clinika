import { InputContainer } from "./style";
import {MdVisibilityOff, MdVisibility} from 'react-icons/md'
import {useState} from 'react'

const Input = ({ inputName, name, isPassword=false, register,type='text' }) => {
  const [visible, setVisible] = useState(false)

    return (
    <>
      {isPassword ? (
        <InputContainer>
          <input
            {...register(name)}
            required={true}
            type={visible ? 'text' : 'password'}
            // autoComplete={"off"}
            className="input"
            placeholder={' '}
            name={name}
          />
          <label className="user-label">{inputName}</label>
          <div className="eye-icon" onClick={()=>setVisible(!visible)}>
            {visible ? <MdVisibility/> : <MdVisibilityOff/>}
          </div>
        </InputContainer>
      ) : (
        <InputContainer>
          <input
            {...register(name)}
            required={true}
            type={type}
            // autoComplete={"off"}
            className="input"
            name={name}
            placeholder={' '}
          />
          <label className="user-label">{inputName}</label>
        </InputContainer>
      )}
    </>
  );
};

export default Input;
