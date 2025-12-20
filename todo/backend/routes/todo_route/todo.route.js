import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from "../../controllers/todo.controllers.js";
import { protectRouteMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

// get todos route
router.get("/todos", getTodos);

//  create todo route
router.post("/todos/create", createTodo);

// delete todo route
router.delete("/todos/delete/:id", deleteTodo);

// edit todo route
router.put("/todos/edit/:id", editTodo);

export default router;
