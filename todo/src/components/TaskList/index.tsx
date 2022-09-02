// Imports
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

// Components
import Task from "../Task";

// Styled Components
import { TaskListS } from "./style";

// Functional Component
const TaskList: React.FC = () => {
  const { todoList, setTodoList } = useContext(TaskContext);

  const deleteTask = (taskIdToDelete: number) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdToDelete;
      })
    );
  };

  const pinTask = (taskIdToPin: number) => {};

  return (
    <TaskListS>
      {todoList.map((task) => {
        return <Task task={task} key={task.id} deleteTask={deleteTask} />;
      })}
    </TaskListS>
  );
};

export default TaskList;
