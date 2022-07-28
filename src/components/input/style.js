import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
  .input {
    border: solid 1.5px #9e9e9e;
    border-radius: 1rem;
    background: none;
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: var(--tx-p);
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .eye-icon{
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-p);
    padding: 7px;
    position: absolute;
    right: 10px;
    top: 8px;
    cursor: pointer;
    color: var(--tx-p);
    svg{
      color: var(--tx-p);
    }
  }
  .user-label {
    position: absolute;
    left: 15px;
    color: var(--tx-t);
    pointer-events: none;
    transform: translateY(0.9rem);
    font-size: 0.8rem;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .input:focus,
  input:valid {
    outline: none;
    border: 1.5px solid var(--bg-t);
  }

  .input:focus ~ label,
  input:valid ~ label, input:not(:placeholder-shown) ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: var(--bg-s);
    padding: 0 0.2em;
    color: var(--bg-t);
  }
`;
