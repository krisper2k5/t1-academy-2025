import Navbar from "./components/Filters/Filters";
import TaskItem from "./components/TaskItem/TaskItem";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/AddNewItem" element={<TaskItem />} />
      </Routes>
    </>
  );
}

export default App;
