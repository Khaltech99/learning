import Todo from "../models/todo.model.js";
import { customError } from "../utils/error.js";

// CREATE TODO SERVICE
export const createTodoServices = async (title, description, user) => {
  //   check if the title and description is present
  if (!title || !description) {
    throw new Error("Field cannot be empty");
  }

  const newTodo = await Todo.create({
    title,
    description,
    user,
  });

  return newTodo;
};

// GET TODO SERVICE
export const getTodoServices = async (userId, filter) => {
  if (!userId) {
    throw new Error("YOU ARE NOT AUTHORIZED TO DO THIS");
  }

  // 1. Destructure to separate filters from pagination controls
  const { page = 1, limit, completed, ...otherFilters } = filter;

  // 2. Build the query using only actual data fields
  const query = { ...otherFilters, user: userId };

  // 3. Cast Booleans
  if (completed === "false") query.completed = false;
  if (completed === "true") query.completed = true;

  const safeLimit = Math.min(parseInt(limit) || 2, 10);

  // 4. Pagination logic

  const skip = (parseInt(page) - 1) * safeLimit;

  // 5. Fetch Data and Total Count concurrently
  const [todos, total] = await Promise.all([
    Todo.find(query).skip(skip).limit(safeLimit).sort({ createdAt: -1 }),
    Todo.countDocuments(query),
  ]);

  if (todos.length === 0 && page === 1) {
    throw customError("NO TODO FOUND", 404);
  }

  // 6. Return a proper pagination object
  return {
    data: todos,
    meta: {
      totalItems: total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / safeLimit),
      itemsPerPage: safeLimit,
    },
  };
};

// DELETE TODO SERVICE
export const deleteTodoServices = async (todoId, userId) => {
  // CHECK IF TODO EXISTS
  if (!todoId) {
    throw new Error("TODO WITH THIS ID NOT FOUND");
  }

  // CHECK IF USER EXISTS
  if (!userId) {
    throw new Error("USER NOT FOUND");
  }

  const deletedTodo = await Todo.findOneAndDelete({
    _id: todoId,
    user: userId,
  });

  if (!deletedTodo) {
    throw new Error("ERROR DELETING TODO");
  }

  return deletedTodo;
};

// EDIT TODO SERVICE

export const editTodoServices = async (
  todoId,
  userId,
  newTitle,
  newDescription,
  newCompleted
) => {
  // CHECKING IF TODO_ID DOES NOT EXIST
  if (!todoId) {
    throw new Error("TO DO WITH THIS ID NOT FOUND");
  }
  // CHECK IF USER DOES NOT EXIST
  if (!userId) {
    throw new Error("USER NOT FOUND");
  }

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoId, user: userId },
    {
      $set: {
        title: newTitle,
        description: newDescription,
        completed: newCompleted,
      },
    },
    { new: true }
  );

  if (!updatedTodo) {
    throw new Error("TODO NOT UPDATED");
  }

  return updatedTodo;
};
