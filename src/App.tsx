import Header from "./components/Header/Header";

import { useTheme } from "./hooks/use-theme";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <Header />
    </>
  );
}

export default App;
