import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-p);
  border: 2px solid var(--border);
  width: 100%;
  flex: 1;
  padding: 3px;
  border-radius: 8px;
  overflow-y: scroll;
`;

export const StyledLi = styled.li`
  font-family: var(--tx-f-p);
  border: 1px solid var(--border);
  background-color: var(--bg-s);
  padding: 4px 6px;
  border-radius: 4px;
  background-color: ${(props) => props.selected && "var(--bg-t)"};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  + li {
    margin-top: 2px;
  }

  span {
    color: ${(props) => (props.selected ? "var(--tx-p-i)" : "var(--tx-p)")};
  }

  :hover {
    background-color: ${(props) =>
      props.selected ? "var(--bg-t)" : "var(--bg-t-hover)"};

    span {
      color: var(--tx-p-i);
    }
  }
`;
