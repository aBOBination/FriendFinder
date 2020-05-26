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
  newFriend.scores = newFriend.scores.map(Number);
  // find closest match
  var match = tools.findMatch(newFriend, friends);
  // return closest match JSON
  res.json(match);
  delete match.avgDiff;
  console.log(match);
  // push new friend to friends data
  friends.push(newFriend);
});

module.exports = router;
