import { useNavigate } from "react-router";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { create } from "zustand";

function TaskItem() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  interface Task {
    id: string;
    title: string;
    context: string;
    category: string;
    status: string;
    priority: string;
  }

  interface ToDoRefresh {
    tasks: Task[];
    createTask: (
      title: string,
      context: string,
      category?: string,
      status?: string,
      priority?: string
    ) => void;
    updateTask: (
      id: string,
      title: string,
      context: string,
      category?: string,
      status?: string,
      priority?: string
    ) => void;
    removedTask: (id: string) => void;
  }

  // export const useToDoStore = create<ToDoRefresh>((set, get) => ({
  //   tasks: [],
  //   createTask: (title, context, category, status, priority) => {
  //     const { tasks } = get();
  //   },
  //   updateTask: (title, context, category, status, priority) => {},
  //   removedTask: (id) => {},
  // }));

  return (
    <Box className="task-item-container">
      <Paper elevation={3} className="task-item-paper">
        <Typography variant="h4" className="task-item-title">
          Create New Task
        </Typography>

        <form onSubmit={handleSubmit} className="task-item-form">
          <TextField
            fullWidth
            label="Title"
            margin="normal"
            required
            className="task-item-field"
          />

          <TextField
            fullWidth
            label="Description"
            margin="normal"
            multiline
            rows={4}
            className="task-item-field"
          />

          <TextField
            fullWidth
            select
            label="Status"
            margin="normal"
            defaultValue="To Do"
            className="task-item-field"
          >
            <MenuItem value="To Do">To Do</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
          </TextField>

          <TextField
            fullWidth
            select
            label="Category"
            margin="normal"
            defaultValue="Feature"
            className="task-item-field"
          >
            <MenuItem value="Bug">Bug</MenuItem>
            <MenuItem value="Feature">Feature</MenuItem>
            <MenuItem value="Documentation">Documentation</MenuItem>
            <MenuItem value="Refactor">Refactor</MenuItem>
            <MenuItem value="Test">Test</MenuItem>
          </TextField>

          <TextField
            fullWidth
            select
            label="Priority"
            margin="normal"
            defaultValue="Medium"
            className="task-item-field"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>

          <Box className="task-item-buttons">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="task-item-button-save"
            >
              Save Task
            </Button>

            <Button
              variant="outlined"
              onClick={handleCancel}
              className="task-item-button-cancel"
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default TaskItem;
