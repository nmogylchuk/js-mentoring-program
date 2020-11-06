const express = require('express');

const port = 3000;
const app = express();

app.get('/test', function (req: any, res: any) {
  res.json({ message: 'Hello, World!' });
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log('Hello, World!');
});

module.exports = server;
