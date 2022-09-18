import styled from "styled-components";

export const InfoBoxesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin: 16px; */
  gap: 16px;
  flex-wrap: wrap;

  .info-box {
    width: 100%;
    background-color: var(--bg-s);
    border-radius: 15px;
    padding: 16px;
    flex: 1;

    @media (max-width:1150px) {
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
