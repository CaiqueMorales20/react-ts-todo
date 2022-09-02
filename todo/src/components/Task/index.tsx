import { FC, useState } from "react";
import {
  CheckButton,
  Dots,
  DotsIcon,
  Options,
  TaskDescription,
  TaskItem,
  TaskS,
} from "./style";

interface ButtonProps {
  checkedButton?: boolean;
}

const Task: FC<ButtonProps> = ({ checkedButton }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleCheck = (): void => {
    setChecked(!checked);
  };

  const deleteTask = (): void => {
    alert("Delete");
  };

  const pinTask = (): void => {
    alert("Pin");
  };

  return (
    <TaskS>
      <TaskItem>
        <CheckButton onClick={handleCheck} checkedButton={checked} />
        <TaskDescription checkedButton={checked}>
          Finish coding todo app
        </TaskDescription>
      </TaskItem>
      <Dots>
        {menuOpened && (
          <Options>
            <ul>
              <li onClick={pinTask}>
                <span className="material-symbols-outlined">push_pin</span>
                <p>Pin on the Top</p>
              </li>
              <li onClick={deleteTask}>
                <span className="material-symbols-outlined">delete</span>
                <p>Delete</p>
              </li>
            </ul>
          </Options>
        )}
        <DotsIcon
          onClick={() => setMenuOpened(!menuOpened)}
          className="material-symbols-outlined"
        >
          more_horiz
        </DotsIcon>
      </Dots>
    </TaskS>
  );
};

export default Task;
