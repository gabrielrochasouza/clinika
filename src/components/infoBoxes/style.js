import styled from "styled-components";

export const InfoBoxesContainer = styled.div`
  display: flex;
  margin: 16px;
  gap: 16px;
  flex-wrap: wrap;
  .info-box {
    background-color: var(--bg-s);
    border-radius: 15px;
    padding: 16px;
    flex: 1;
    transition: 500ms all;
    :hover {
      transition: 1s all;
      background-color: var(--bg-t);
      span {
        color: var(--tx-w);
      }
    }
    @media (max-width:1000px) {
        flex-basis: 47%;
    }
    @media (max-width:565px) {
        flex-basis: 100%;
    }
    @media (max-width: 360px) {
      min-width: 100%;
    }
    .number {
      font-size: 3rem;
      color: var(--tx-t);
      display: block;
      font-weight: 600;
    }
    .number-description {
      display: block;
      font-size: 0.7rem;
      color: var(--tx-s);
    }
  }
`;
