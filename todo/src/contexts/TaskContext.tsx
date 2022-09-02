import { createContext, ReactNode } from "react";
import { useState } from "react";
import { ITask } from "../interface";

type TaskContextProps = {
  children: ReactNode;
};

type TaskContextType = {
  task: string;
  setTask: (newState: string) => void;
  id: number;
  setId: (newState: number) => void;
  todoList: ITask[];
  setTodoList: (newState: ITask[]) => void;
  pinnedTodoList: ITask[];
  setPinnedTodoList: (newState: ITask[]) => void;
  isPinned: boolean;
};

const initialValue = {
  task: "",
  setTask: () => "",
  id: 1,
  setId: () => {},
  isPinned: false,
  todoList: [],
  setTodoList: () => {},
  pinnedTodoList: [],
  setPinnedTodoList: () => {},
};

export const TaskContext = createContext<TaskContextType>(initialValue);

export const TaskContextProvider = ({ children }: TaskContextProps) => {
  const [id, setId] = useState(initialValue.id);
  const [task, setTask] = useState(initialValue.task);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [pinnedTodoList, setPinnedTodoList] = useState<ITask[]>([]);
  const isPinned = initialValue.isPinned;

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        id,
        setId,
        isPinned,
        todoList,
        setTodoList,
        pinnedTodoList,
        setPinnedTodoList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
