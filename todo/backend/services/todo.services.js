import Todo from "../models/todo.model.js";

export const createTodoServices = async (title, description) => {
  //   check if the title and description is present
  if (!title || !description) {
    throw new Error("Field cannot be empty");
  }

  const newTodo = await Todo.create({
    title,
    description,
  });

  return newTodo;
};
