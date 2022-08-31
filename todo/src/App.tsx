// Imports
import { FC } from "react";
import { GlobalStyle } from "./GlobalStyles";

// Components
import Header from "./components/Header";

// Styled Component
import { Container } from "./App.style";

const App: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
    </Container>
  );
};

export default App;
