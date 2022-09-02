import { FC, useState } from "react";
import { CheckButton, TaskDescription, TaskS } from "./style";

interface ButtonProps {
  checkedButton: boolean;
}

const Task: FC<ButtonProps> = ({ checkedButton }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheck = (): void => {
    setChecked(!checked);
  };

  return (
    <TaskS>
      <div>
        <CheckButton onClick={handleCheck} checkedButton={checked} />
        <TaskDescription checkedButton={checked}>
          Finish coding todo app
        </TaskDescription>
      </div>
      <span className="material-symbols-outlined">more_horiz</span>
    </TaskS>
  );
};

export default Task;
