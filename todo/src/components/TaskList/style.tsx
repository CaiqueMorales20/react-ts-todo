import styled from "styled-components";

export const TaskListS = styled.div`
  & > ul {
    padding-inline: 0.5em;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  & > ul:first-child {
    padding-bottom: 2em;
    border-bottom: 2px solid #373e46;
  }
`;
