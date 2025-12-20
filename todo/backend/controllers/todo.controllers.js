import { createTodoServices } from "../services/todo.services.js";

// get todos
export const getTodos = async (req, res) => {
  res.status(200).json({ message: "success", user: req.user });
};

// create todos
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // PASSING THE DESTRUCTURED BODY TO THE CREATE TODO SERVICES
    const todo = await createTodoServices(title, description);

    // CHECK IF NO TODO
    if (!todo) {
      return res.status(401).json({ message: "unable to create todo" });
    }

    res.status(201).json({ message: "todo created successfully", todo });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: error.message });
  }
};

// delete todos
export const deleteTodo = (req, res) => {};

// edit todos
export const editTodo = (req, res) => {};
