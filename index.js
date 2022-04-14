const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 2001;
const dir = path.join(__dirname, './test.html')

app.use(express.static(dir), (req, res) => {
    res.sendFile(dir);
});

app.listen(port);