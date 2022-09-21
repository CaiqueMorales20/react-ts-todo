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
  width: 100%;
  align-items: center;
  gap: 0.5em;
`;

export const RenameInput = styled.input`
  width: 100%;
  background-color: #484f59;
  padding: 0.5em 1em;
  color: #ffffff;
  border: 1px solid #2c3137;
  margin-right: 1em;
`;

export const CheckButton = styled.button<ButtonProps>`
  height: 1.2rem;
  width: 1.2rem;
  outline: none;
  border: 2px solid grey;
  border-radius: 0.2em;
  background-color: #3b424a;
  cursor: pointer;
  aspect-ratio: 1;

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
  margin-inline: 0.5em;
  margin-bottom: -0.5rem;
  word-break: break-all;

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
  position: absolute;
  right: 0rem;
  top: 2rem;
  padding: 1em;
  z-index: 1;

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 8rem;
    gap: 1.5em;
  }

  & > ul li,
  & > ul div {
    display: flex;
    align-items: center;
    gap: 0.75em;
    cursor: pointer;
    width: 100%;
  }
`;
