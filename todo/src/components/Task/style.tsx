import styled, { css } from "styled-components";

interface ButtonProps {
  checkedButton: boolean;
}

export const TaskS = styled.li`
  display: flex;
  justify-content: space-between;

  & > *:first-child {
    flex: 2fr;
  }

  & > *:last-child {
    flex: 1fr;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
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
  position: relative;
  left: 0;
  top: 0;
  margin-bottom: -0.5rem;

  /* When Checked */
  ${(props) =>
    props.checkedButton
      ? css`
          text-decoration: line-through;
        `
      : ""}
  color: #fff;
`;

export const Dots = styled.div`
  position: relative;
  font-size: 0.8rem;
`;

export const DotsIcon = styled.span`
  cursor: pointer;
`;

export const Options = styled.div`
  background-color: #484f59;
  width: max-content;
  position: absolute;
  right: 0rem;
  top: 2rem;
  padding: 1em;
  z-index: 1;

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  }

  & > ul > li {
    display: flex;
    align-items: center;
    gap: 0.5em;
    cursor: pointer;
  }
`;
