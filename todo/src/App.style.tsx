import styled from "styled-components";

export const Container = styled.main`
  width: min(30rem, 90%);
  min-height: 34rem;
  height: max-content;
  border-radius: 0.5rem;
  margin-inline: auto;
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  background: #3b424a;
  color: #ffffff;
  padding: 3em;

  @media screen and (max-width: 768px) {
    padding: 2em;
  }
`;
