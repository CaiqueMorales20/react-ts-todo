import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import Task from "../Task";
import { TaskListS } from "./style";

const TaskList = () => {
  const { todoList } = useContext(TaskContext);

  return (
    <TaskListS>
      {todoList.map((task) => {
        return <Task taskName={task.taskName} key={task.id} />;
      })}
    </TaskListS>
  );
};

export default TaskList;
