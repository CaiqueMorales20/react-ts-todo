import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { HeaderS, InputS, IconS } from "./style";

const Header = () => {
  const { task, setTask, todoList, setTodoList, id, setId } =
    useContext(TaskContext);

  const addTask = (e: React.KeyboardEvent) => {
    if (task.length <= 0) return;
    if (e.key === "Enter") {
      const newTask = { taskName: task, id: id, isPinned: false };
      if (id === 0) setId(1);
      setId(id + 1);
      if ([...todoList]) setTodoList([...todoList, newTask]);
      while (id < 1) {
        setTodoList([...todoList, newTask]);
      }
      setTask("");
    }
  };

  return (
    <HeaderS>
      <IconS className="material-symbols-outlined">format_align_left</IconS>
      <InputS
        type="text"
        placeholder="Add a task ..."
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTask(e.target.value)
        }
        onKeyDown={addTask}
      />
    </HeaderS>
  );
};

export default Header;
