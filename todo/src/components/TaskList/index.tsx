// Imports
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

// Components
import Task from "../Task";

// Styled Components
import { PinnedTaskList, TaskListS } from "./style";

// Functional Component
const TaskList: React.FC = () => {
  const { todoList, setTodoList, pinnedTodoList, setPinnedTodoList } =
    useContext(TaskContext);

  const deleteTask = (taskIdToDelete: number, isPinned: boolean) => {
    {
      isPinned
        ? setPinnedTodoList(
            pinnedTodoList.filter((task) => {
              return task.id !== taskIdToDelete;
            })
          )
        : setTodoList(
            todoList.filter((task) => {
              return task.id !== taskIdToDelete;
            })
          );
    }

    console.log(taskIdToDelete);
  };

  const pinTask = (taskIdToPin: number, isPinned: boolean) => {
    if (isPinned === true) {
      setPinnedTodoList(
        pinnedTodoList.filter((task) => {
          return task.id !== taskIdToPin;
        })
      );

      const unpinnedTask = pinnedTodoList.filter((task) => {
        return task.id === taskIdToPin;
      });

      const filteredTask = {
        taskName: unpinnedTask[0].taskName,
        id: unpinnedTask[0].id,
        isPinned: false,
      };

      return setTodoList([...todoList, filteredTask]);
    }

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
      isPinned: true,
    };

    setPinnedTodoList([...pinnedTodoList, filteredTask]);
  };

  return (
    <TaskListS>
      {pinnedTodoList.length > 0 && (
        <PinnedTaskList>
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
        </PinnedTaskList>
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
