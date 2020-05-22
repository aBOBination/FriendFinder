function findMatch(newFriend, allFriends) {
  var newScore = newFriend.scores.reduce((a, b) => a + b, 0);
  allFriends.forEach((friend) => {
    var totalScore = friend.scores.reduce((a, b) => a + b, 0);
    var diff = Math.abs(newScore - totalScore);
    console.log(diff);
  });
}

module.exports = {
  findMatch,
};
