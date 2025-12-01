import { Router } from "express";

const router = Router();

let posts = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
  { id: 4, title: "four" },
];

router.get("/", (req, res) => {
  return res.status(200).json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchedPost = posts.find((post) => post.id === id);
  if (!searchedPost) {
    return res.status(400).json({ msg: "post not found" });
  }
  res.status(200).json(searchedPost);
});

router.post("/", (req, res) => {
  const newPost = { id: posts.length + 1, title: req.body.title };
  if (!req.body.title) {
    return res.status(404).json({ msg: "not title found" });
  }
  posts.push(newPost);
  res.status(200).json(newPost);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: "post not found" });
  }
  const editedTitle = req.body.title;
  post.title = editedTitle;
  res.status(201).json(post);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: "post not found" });
  }

  posts = posts.filter((p) => p.id !== id); // ✅ Reassign posts array

  res.status(200).json(posts); // Return deleted post
});
export default router;
