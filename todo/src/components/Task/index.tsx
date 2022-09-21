// Imports
import React, { FC, useState, useRef, useEffect, useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { ITask } from "../../interface";

// Styled Components
import {
  CheckButton,
  Dots,
  DotsIcon,
  Options,
  RenameInput,
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
  const [renameMenuOpened, setRenameMenuOpened] = useState<boolean>(false);
  const [renamedTaskName, setRenamedTaskName] = useState<string>("");

  const { todoList, setTodoList, pinnedTodoList, setPinnedTodoList } =
    useContext(TaskContext);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuOpened(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleEnter = (
    e: React.KeyboardEvent,
    taskId: number,
    isPinned: boolean
  ): void => {
    if (e.key === "Enter") {
      setRenameMenuOpened(false);
      if (renamedTaskName.length === 0) return;
      if (isPinned) {
        const filteredPinnedTodoList = pinnedTodoList.filter((task) => {
          return taskId !== task.id;
        });

        const newTask = {
          taskName: renamedTaskName,
          id: task.id,
          isPinned: task.isPinned,
        };

        return setPinnedTodoList([...filteredPinnedTodoList, newTask]);
      }

      const filteredTodoList = todoList.filter((task) => {
        return taskId !== task.id;
      });

      const newTask = {
        taskName: renamedTaskName,
        id: task.id,
        isPinned: task.isPinned,
      };

      return setTodoList([...filteredTodoList, newTask]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRenamedTaskName(e.currentTarget.value);
  };

  return (
    <TaskS>
      <TaskItem>
        <CheckButton
          onClick={() => setChecked(!checked)}
          checkedButton={checked}
        />
        {renameMenuOpened ? (
          <RenameInput
            type="text"
            defaultValue={task.taskName}
            onKeyDown={(e) => handleEnter(e, task.id, task.isPinned)}
            onChange={handleChange}
          />
        ) : (
          <TaskDescription checkedButton={checked}>
            {task.taskName}
          </TaskDescription>
        )}
      </TaskItem>
      <Dots>
        <DotsIcon
          onClick={() => setMenuOpened(true)}
          className="material-symbols-outlined"
        >
          more_horiz
        </DotsIcon>
        {menuOpened && (
          <Options ref={wrapperRef}>
            <ul>
              <li onClick={() => setMenuOpened(!menuOpened)}>
                <div onClick={() => setRenameMenuOpened(!renameMenuOpened)}>
                  <span className="material-symbols-outlined">
                    drive_file_rename_outline
                  </span>
                  <p>Rename</p>
                </div>
              </li>
              <li onClick={() => setMenuOpened(!menuOpened)}>
                <div onClick={() => pinTask(task.id, task.isPinned)}>
                  <span className="material-symbols-outlined">push_pin</span>
                  <p>{task.isPinned ? "Unpin" : "Pin on the Top"}</p>
                </div>
              </li>
              <li onClick={() => setMenuOpened(!menuOpened)}>
                <div onClick={() => deleteTask(task.id, task.isPinned)}>
                  <span className="material-symbols-outlined">delete</span>
                  <p>Delete</p>
                </div>
              </li>
            </ul>
          </Options>
        )}
      </Dots>
    </TaskS>
  );
};

export default Task;
