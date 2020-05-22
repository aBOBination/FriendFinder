// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a
// JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey
// results. This route will also be used to handle the compatibility logic.

var express = require('express');
var router = express.Router();
var friends = require('../data/friends.js');
var tools = require('./tools.js');

router.use(function (req, res, next) {
  next();
});

router.get('/api/friends', function (req, res) {
  return res.json(friends);
});

router.post('/api/friends', function (req, res) {
  var newFriend = req.body;
  console.log(newFriend.scores);
  newFriend.scores = newFriend.scores.map(Number);
  tools.findMatch(newFriend, friends);
  // find closest match
  newFriend.name = 'update ' + newFriend.name;
  console.log(newFriend);
  console.log(newFriend.scores.reduce((a, b) => a + b, 0));
  // return closest match JSON
  res.json(newFriend);
  // push new friend to friends data
  friends.push(newFriend);
});

module.exports = router;
