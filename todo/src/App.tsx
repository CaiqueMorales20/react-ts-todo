// Imports
import { FC } from "react";
import { GlobalStyle } from "./GlobalStyles";

// Components
import Header from "./components/Header";

// Styled Component
import { Container } from "./App.style";
import TaskList from "./components/TaskList";

const App: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <TaskList />
    </Container>
  );
};

export default App;
