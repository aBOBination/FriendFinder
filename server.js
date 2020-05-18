// Your server.js file should require the basic npm packages we've used
// in class: express and path.

// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var friends = require('./app/data/friends.js');
var htmlRoutes = require('./app/routes/htmlRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
app.routes(htmlRoutes);
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, './app/public/home.html'));
// });

// app.get('/survey', function (req, res) {
//   res.sendFile(path.join(__dirname, './app/public/survey.html'));
// });

app.get('/api/friends', function (req, res) {
  return res.json(friends);
});

// // Displays all characters
// app.get('/api/characters', function (req, res) {
//   return res.json(characters);
// });

// // Displays a single character, or returns false
// app.get('/api/characters/:character', function (req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post('/api/characters', function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });
module.exports = app;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
