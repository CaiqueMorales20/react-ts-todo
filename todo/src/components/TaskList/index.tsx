import Task from "../Task";
import { TaskListS } from "./style";

const TaskList = () => {
  return (
    <TaskListS>
      <Task />
      <Task />
      <Task />
    </TaskListS>
  );
};

export default TaskList;
