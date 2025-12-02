import { Router } from "express";
import error from "./error.js";

const router = Router();

let posts = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
  { id: 4, title: "four" },
];

// get router
router.get("/", (req, res) => {
  return res.status(200).json(posts);
});

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const searchedPost = posts.find((post) => post.id === id);
  if (!searchedPost) {
    return next(error(400, "post not found"));
  }
  res.status(200).json(searchedPost);
});

// post router

router.post("/", (req, res, next) => {
  const newPost = { id: posts.length + 1, title: req.body.title };
  if (!req.body.title) {
    return next(error(404, "title not found"));
  }
  posts.push(newPost);
  res.status(200).json(newPost);
});

// put router
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return next(error(404, "post not found"));
  }
  const editedTitle = req.body.title;
  post.title = editedTitle;
  res.status(201).json(post);
});

//delete router
router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return next(error(404, "post not found"));
  }

  posts = posts.filter((p) => p.id !== id); // ✅ Reassign posts array

  res.status(200).json(posts); // Return deleted post
});
export default router;
