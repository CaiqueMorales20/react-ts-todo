import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { HeaderS, InputS, IconS } from "./style";

const Header = () => {
  const { task, setTask, todoList, setTodoList, id, setId } =
    useContext(TaskContext);

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
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
        onKeyDown={handleSubmit}
      />
    </HeaderS>
  );
};

export default Header;
