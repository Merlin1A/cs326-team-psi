var express = require('express');
var app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
