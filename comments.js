// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add middleware
app.use(express.json());

// Add comments array
const comments = [
  { id: 1, comment: 'Hello, World!' },
  { id: 2, comment: 'Hello, Node.js!' },
  { id: 3, comment: 'Hello, Express!' },
];

// Define routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push({ id: comments.length + 1, comment });
  res.json(comments);
});

app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = req.body.comment;
  const index = comments.findIndex((c) => c.id === id);
  if (index !== -1) {
    comments[index] = { id, comment };
    res.json(comments);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = comments.findIndex((c) => c.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.json(comments);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// Start web server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Test the web server
// $ curl http://localhost:3000/comments
// [{"id":1,"comment":"Hello, World!"},{"id":2,"comment":"Hello, Node.js!"},{"id":3,"comment":"Hello, Express!"}]
// $ curl -X POST -H "Content-Type: application/json" -d '{"comment":"Hello, JavaScript!"}' http://localhost:3000/comments
// [{"id":1,"comment":"Hello, World!"},{"id":2,"comment":"Hello, Node.js!"},{"id":3,"comment":"Hello, Express!"},{"id":4,"comment":"Hello, JavaScript!"}]
// $ curl -X PUT -H "Content-Type: application