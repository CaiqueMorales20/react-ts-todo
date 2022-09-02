// Imports
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

// Components
import Task from "../Task";

// Styled Components
import { TaskListS } from "./style";

// Functional Component
const TaskList: React.FC = () => {
  const { todoList, setTodoList, pinnedTodoList, setPinnedTodoList } =
    useContext(TaskContext);

  const deleteTask = (taskIdToDelete: number) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdToDelete;
      })
    );
  };

  const pinTask = (taskIdToPin: number) => {
    // Removing from previous todoList
    setTodoList(
      todoList.filter((task) => {
        return task.id !== taskIdToPin;
      })
    );

    const pinnedTask = todoList.filter((task) => {
      return task.id === taskIdToPin;
    });

    // Adding to pinnedTodoList
    const filteredTask = {
      taskName: pinnedTask[0].taskName,
      id: pinnedTask[0].id,
    };

    setPinnedTodoList([...pinnedTodoList, filteredTask]);
  };

  return (
    <TaskListS>
      {pinnedTodoList.length > 0 && (
        <ul>
          {pinnedTodoList.map((task) => {
            return (
              <Task
                task={task}
                key={task.id}
                deleteTask={deleteTask}
                pinTask={pinTask}
              />
            );
          })}
        </ul>
      )}
      <ul>
        {todoList.map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              deleteTask={deleteTask}
              pinTask={pinTask}
            />
          );
        })}
      </ul>
    </TaskListS>
  );
};

export default TaskList;
