const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

let currentJson = {};

app.get('/', (req, res) => res.json(currentJson));

app.post('/', (req, res) => {
  currentJson = req.body;
  res.status(200).end();
});

app.listen(port, () => console.log(`smithy_site_routing_server listening on port ${port}!`))
