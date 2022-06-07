const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.get('/', (req, res) => res.sendfile("index.html"));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
