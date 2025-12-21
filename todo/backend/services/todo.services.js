import Todo from "../models/todo.model.js";

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
export const getTodoServices = async (userId) => {
  if (!userId || userId === null || userId === "undefined") {
    throw new Error("YOU ARE NOT AUTHORIZED TO DO THIS");
  }
  const todos = await Todo.find({ user: userId });
  if (todos.length === 0) {
    throw new Error("YOU DO NOT HAVE ANY TODOS AT THE MOMENT");
  }

  return todos;
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
  newDescription
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
    { $set: { title: newTitle, description: newDescription } },
    { new: true }
  );

  if (!updatedTodo) {
    throw new Error("TODO NOT UPDATED");
  }

  return updatedTodo;
};
