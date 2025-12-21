import Todo from "../models/todo.model.js";
import {
  createTodoServices,
  deleteTodoServices,
  getTodoServices,
} from "../services/todo.services.js";

// get todos
export const getTodos = async (req, res) => {
  try {
    // CHECK IF THEIR IS USER ID FROM THE REQ
    const userId = req.user.id;
    const todos = await getTodoServices(userId);

    // RETURN THE TODO
    return res.status(200).json({ message: "getting todo", todos });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// create todos
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    // USER ID FORM THE PROTECTED ROUTE
    const userId = req.user.id;

    // PASSING THE DESTRUCTURED BODY TO THE CREATE TODO SERVICES
    const todo = await createTodoServices(title, description, userId);

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
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const userId = req.user.id;

    const deleteTodo = await deleteTodoServices(id, userId);

    return res.status(200).json({
      message: "Todo deleted successfully",
      deleted_todo: deleteTodo.title,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// edit todos
export const editTodo = (req, res) => {};
