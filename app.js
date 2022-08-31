const app = require('express')();

app.get('/', (_, res) => {
  res.json({ message: 'Hello, ODevs' });
});

module.exports = app;