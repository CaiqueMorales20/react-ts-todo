// Imports
import { FC, useContext } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { TaskContextProvider } from "./contexts/TaskContext";

// Components
import Header from "./components/Header";

// Styled Component
import { Container } from "./App.style";
import TaskList from "./components/TaskList";

const App: FC = () => {
  return (
    <TaskContextProvider>
      <Container>
        <GlobalStyle />
        <Header />
        <TaskList />
      </Container>
    </TaskContextProvider>
  );
};

export default App;
