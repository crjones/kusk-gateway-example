const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Foo received a request.');

  res.send(`Bar!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Foo listening on port', port);
});