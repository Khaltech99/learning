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
router.get("/todos", protectRouteMiddleware, getTodos);

//  create todo route
router.post("/todos/create", protectRouteMiddleware, createTodo);

// delete todo route
router.delete("/todos/delete/:id", protectRouteMiddleware, deleteTodo);

// edit todo route
router.put("/todos/edit/:id", protectRouteMiddleware, editTodo);

export default router;
