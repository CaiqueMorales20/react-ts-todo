// Imports
import { FC, useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";

// Styled Components
import {
  CheckButton,
  Dots,
  DotsIcon,
  Options,
  TaskDescription,
  TaskItem,
  TaskS,
} from "./style";

interface PropsType {
  checkedButton?: boolean;
  taskName: string;
}

interface Props {
  taskName: string;
}

const Task: FC<PropsType> = (props: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const { todoList, setTodoList } = useContext(TaskContext);

  const handleCheck = (): void => {
    setChecked(!checked);
  };

  const deleteTask = (): void => {};

  const pinTask = (): void => {
    alert("Pin");
  };

  return (
    <TaskS>
      <TaskItem>
        <CheckButton onClick={handleCheck} checkedButton={checked} />
        <TaskDescription checkedButton={checked}>
          {props.taskName}
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
