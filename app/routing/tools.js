function arrAvgDiff(a1, a2) {
  var diffs = [];
  for (var i = 0; i < a1.length; i++) {
    var diff = Math.abs(a1[i] - a2[i]);
    diffs.push(diff);
  }
  var diffSum = diffs.reduce((a, b) => a + b, 0);
  var avgDiff = diffSum / diffs.length;
  return avgDiff;
}

function findLowestAvg(newFriend, allFriends) {
  var avgDiffs = [];
  allFriends.forEach((friend) => {
    var avgDiff = arrAvgDiff(newFriend.scores, friend.scores);
    friend.avgDiff = avgDiff;
    avgDiffs.push(avgDiff);
    avgDiffs.sort();
  });
  allFriends.sort(function (a, b) {
    return a.avgDiff - b.avgDiff;
  });
  return avgDiffs[0];
}

function findMatch(newFriend, allFriends) {
  var lowestAvg = findLowestAvg(newFriend, allFriends);
  var matchingFriends = allFriends.filter(function (low) {
    return low.avgDiff === lowestAvg;
  });
  var numResults = matchingFriends.length;
  var randomResult = Math.floor(Math.random() * numResults);
  var result = matchingFriends[randomResult];
  allFriends.forEach((friend) => {
    delete friend.avgDiff;
  });
  return result;
}

module.exports = {
  findMatch,
};
