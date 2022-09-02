import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  inset: 0;
  width: min(30rem, 90%);
  min-height: 30rem;
  height: max-content;
  border-radius: 0.5rem;
  margin-inline: auto;
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  background-color: #3b424a;
  color: #ffffff;
  padding: 3em;

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;
