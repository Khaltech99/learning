// get todos
export const getTodos = async (req, res) => {
  res.status(200).json({ message: "success", user: req.user });
};

// create todos
export const createTodo = (req, res) => {};

// delete todos
export const deleteTodo = (req, res) => {};

// edit todos
export const editTodo = (req, res) => {};
