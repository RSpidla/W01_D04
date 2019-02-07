// The second argument/parameter is expected to be a function
function findWaldo(list, found) {
  list.forEach(function(word, i) {
    if (word === "Waldo") {
      found(i);
    }
  })
}
  
function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);