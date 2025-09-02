import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

// import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import { useNavigate } from "react-router";

function Filters() {
  const navigate = useNavigate();

  const status = [
    { label: "To Do", id: 1 },
    { label: "In Progress", id: 2 },
    { label: "Done", id: 3 },
  ];

  const categories = [
    { label: "Bug", id: 1 },
    { label: "Feature", id: 2 },
    { label: "Documentation", id: 3 },
    { label: "Refactor", id: 4 },
    { label: "Test", id: 5 },
  ];

  const priority = [
    { label: "Low", id: 1 },
    { label: "Medium", id: 2 },
    { label: "High", id: 3 },
  ];

  const handleAddTask = () => {
    navigate("/add-task");
  };

  return (
    <>
      {/* <Header /> */}
      <div className="filtersContainer">
        <Paper component="form" className="searchPaper">
          <IconButton type="button" className="SearchIcon" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            className="searchInput"
            placeholder="Search tasks..."
            inputProps={{ "aria-label": "Search tasks..." }}
          />
        </Paper>

        <Autocomplete
          disablePortal
          options={status}
          className="autocomplete"
          renderInput={(params) => (
            <TextField {...params} label="Status" className="textField" />
          )}
        />

        <Autocomplete
          disablePortal
          options={categories}
          className="autocomplete"
          renderInput={(params) => (
            <TextField {...params} label="Categories" className="textField" />
          )}
        />

        <Autocomplete
          disablePortal
          options={priority}
          className="autocomplete"
          renderInput={(params) => (
            <TextField {...params} label="Priority" className="textField" />
          )}
        />
      </div>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className="newTaskButton"
        onClick={handleAddTask}
      >
        <div className="newTaskButton-text">New Task</div>
      </Button>

      <TaskList />
    </>
  );
}

export default Filters;
