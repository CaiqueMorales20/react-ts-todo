import { HeaderS, InputS, IconS } from "./style";

const Header = () => {
  const task = "Ola";

  return (
    <HeaderS>
      <IconS className="material-symbols-outlined">format_align_left</IconS>
      <InputS type="text" placeholder="Add a task" />
    </HeaderS>
  );
};

export default Header;
