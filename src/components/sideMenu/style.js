import styled from "styled-components";

export const SideMenuContainer = styled.aside`
  /* border-radius: 0 20px 20px 0; */
  background-color: var(--bg-t);
  padding: 0px 0px 0 10px;
  color: var(--tx-w);
  transition: 500ms all;
  width: ${(props) => (props.open ? "280px" : "70px")};
  position: sticky;
  height: 100%;
  top: 0;
  @media (max-width: 870px) {
    position: fixed;
    top: 0;
    z-index: 10;
    height: 100%;
    left: ${(props) => (props.open ? "0" : "-100%;")};
  }
  svg {
    color: var(--tx-w);
    font-size: 24px;
    margin: 0 12px 0 0;
  }
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    animation-delay: 1000ms;
    white-space: nowrap;
    display: ${(props) => {
      return props.open ? "initial" : "none";
    }};
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 100vh;
  }
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--tx-f-s);
    font-size: 16px;
    font-style: 900;
    margin: 10px 0;
    position: relative;
    padding: ${(props) =>
      props.open ? "10px 5px 10px 10px" : "10px 0px 10px 10px"};
    span {
      flex: 1;
      animation-delay: 1000ms;
    }
    svg {
      flex-shrink: 0;
    }
    :hover {
      .box-message {
        display: initial;
      }
    }
    .box-message {
      position: fixed;
      background-color: var(--bg-s);
      padding: 5px 10px;
      font-size: 0.7rem;
      left: 80px;
      border-radius: 5px;
      color: var(--tx-p);
      display: none;
      animation: fadeRight 500ms;
      ::after {
        position: absolute;
        content: "";
        width: 8px;
        transform: rotate(45deg);
        height: 8px;
        left: -5px;
        top: 8px;
        background-color: var(--bg-s);
      }
    }
  }
  li:not(.menu-title, .close):hover {
    background-color: ${(props) => props.open && "var(--bg-p)"};
    border-radius: 20px 0 0 20px;
    color: ${(props) => props.open && "var(--tx-t)"};
    svg {
      color: ${(props) => props.open && "var(--tx-t)"};
    }
  }
  .close {
    svg {
      transition: 1s;
      transform: ${(props) => (props.open ? "rotate(0)" : "rotate(180deg)")};
    }
  }
  .menu-title {
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0 30px 0;
  }
`;
