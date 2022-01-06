/* Rastgele Müzikler Getiren Liste */

function randomArrayShuffle(array, seed = false, compareArray = false) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  if (compareArray) {
    array = Math.random() * 10 >= 5 ? array : compareArray;
  }

  return seed
    ? Object.values(array).slice(
        0,
        Math.random() * 5 + 2 >= 6 ? 6 : Math.random() * 5 + 3
      )
    : array;
}

/* secondToTime */

function secondToTime(seconds) {
  return new Date(seconds * 1000).toISOString().substr(14, 5);
}

export { randomArrayShuffle, secondToTime };
