// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on

const PORT = process.env.PORT || 80;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
