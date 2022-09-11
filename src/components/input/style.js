import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin: 20px 0;
  width: 100%;
  .input {
    border: solid 1.5px #9e9e9e;
    border-radius: 0.7rem;
    background: none;
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: var(--tx-p);
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .input-icon{
    position: absolute;
    right: 12px;
    bottom: 10px;
    svg{
      color: var(--tx-p);
    }
  }
  .eye-icon {
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
    svg {
      color: var(--tx-p);
    }
  }
  .user-label {
    position: absolute;
    left: 15px;
    color: var(--tx-p);
    pointer-events: none;
    transform: translateY(0.9rem);
    font-size: 0.8rem;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 90%;
  }

  textarea{
    resize: none;
  }

  .input:focus,
  input:valid,
  select:valid {
    outline: none;
    border: 1.5px solid var(--bg-t);
  }


  .input:focus ~ label, textarea:valid ~ label,
  input:valid ~ label,
  select:valid ~ label,
  input[type="email"]:not(:placeholder-shown) ~ label,
  input[type="password"]:not(:placeholder-shown) ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: var(--bg-s);
    padding: 0 0.2em;
    color: var(--bg-t);
  }

  input[type="date"] ~ label {
    background-color: var(--bg-s);
  }

  select {
    text-transform: capitalize;
    option {
      text-transform: capitalize;
      color: #000;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--tx-p);
    -webkit-box-shadow: 0 0 0px 1000px var(--bg-s) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png)
      center/80% no-repeat;
    color: var(--tx-p);
    background-color: var(--tx-w);
    border-radius: 4px;
  }
`;
