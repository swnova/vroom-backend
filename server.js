const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.port || 3001;
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});
