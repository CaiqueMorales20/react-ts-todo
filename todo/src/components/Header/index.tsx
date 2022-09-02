import { ChangeEvent, useState } from "react";
import { HeaderS, InputS, IconS } from "./style";

const Header = () => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      alert(`Sua tarefa é: ${message}`);
      setMessage("");
    }
  };

  return (
    <HeaderS>
      <IconS className="material-symbols-outlined">format_align_left</IconS>
      <InputS
        type="text"
        placeholder="Add a task ..."
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleSubmit}
      />
    </HeaderS>
  );
};

export default Header;
