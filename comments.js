// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Send back a JSON response with some comments
// 5. Listen on port 3000
// 6. Test with curl

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json({ comments: [{ body: 'hello', author: 'me' }, { body: 'hi', author: 'you' }] });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// $ curl http://localhost:3000/comments
// {"comments":[{"body":"hello","author":"me"},{"body":"hi","author":"you"}]}