// Imports
import { FC, useState } from "react";
import { ITask } from "../../interface";

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
  task: ITask;
  deleteTask(taskIdToDelete: number, isPinned: boolean): void;
  pinTask(pinIdToDelete: number, isPinned: boolean): void;
}

const Task: FC<PropsType> = ({ task, deleteTask, pinTask }: PropsType) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleCheck = (): void => {
    setChecked(!checked);
  };

  return (
    <TaskS>
      <TaskItem>
        <CheckButton onClick={handleCheck} checkedButton={checked} />
        <TaskDescription checkedButton={checked}>
          {task.taskName}
        </TaskDescription>
      </TaskItem>
      <Dots>
        <DotsIcon
          onClick={() => setMenuOpened(!menuOpened)}
          className="material-symbols-outlined"
        >
          more_horiz
        </DotsIcon>
        {menuOpened && (
          <Options>
            <ul>
              <li onClick={() => setMenuOpened(!menuOpened)}>
                <li onClick={() => pinTask(task.id, task.isPinned)}>
                  <span className="material-symbols-outlined">push_pin</span>
                  <p>{task.isPinned ? "Unpin" : "Pin on the Top"}</p>
                </li>
              </li>
              <li onClick={() => setMenuOpened(!menuOpened)}>
                <li onClick={() => deleteTask(task.id, task.isPinned)}>
                  <span className="material-symbols-outlined">delete</span>
                  <p>Delete</p>
                </li>
              </li>
            </ul>
          </Options>
        )}
      </Dots>
    </TaskS>
  );
};

export default Task;
