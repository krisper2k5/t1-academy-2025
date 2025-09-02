import { Route, Routes } from "react-router";
import Filters from "./components/Filters/Filters";
import TaskItem from "./components/TaskItem/TaskItem";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Filters />} />
        <Route path="/add-task" element={<TaskItem />} />
      </Routes>
    </>
  );
}

export default App;
