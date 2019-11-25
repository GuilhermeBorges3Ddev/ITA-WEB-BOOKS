const express = require('express');
const app = express.Router();

export { app as routes };

app.get('/', (req, res) => res.send({ body: req.body }));
//app.get('/exibir', (req, res) => res.send([]));