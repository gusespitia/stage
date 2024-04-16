import express from "express";
import bodyParser from "body-parser";
import { getAllTodos, getTodoById } from "./queries.js"; // Import query functions

const port = process.env.PORT || 8010;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route handler to get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await getAllTodos(); // Use query function
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Error fetching todos" });
  }
});

// Route handler to get todo by id using query function
app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await getTodoById(id);
    res.json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ error: "Error fetching todo" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
