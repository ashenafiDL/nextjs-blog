export default function handler(req, res) {
  const body = req.body;

  if (!body.comment) {
    return res.status(400).json({ message: "No comment" });
  }

  res
    .status(201)
    .json({ comment: `${body.comment}`, posted: `${body.posted}` });
}
