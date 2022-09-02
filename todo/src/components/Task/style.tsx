import styled, { css } from "styled-components";

interface ButtonProps {
  checkedButton: boolean;
}

export const TaskS = styled.li`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;

export const CheckButton = styled.button<ButtonProps>`
  height: 1.2rem;
  width: 1.2rem;
  outline: none;
  border: 2px solid grey;
  border-radius: 0.2em;
  background-color: #3b424a;
  cursor: pointer;

  ${(props) =>
    props.checkedButton
      ? css`
          background-color: white;
        `
      : ""}
`;

export const TaskDescription = styled.p<ButtonProps>`
  margin-bottom: -0.5rem;

  /* When Checked */
  ${(props) =>
    props.checkedButton
      ? css`
          text-decoration: line-through;
        `
      : ""}
  color: white;
`;
