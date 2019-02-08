// PROBLEM - Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.

// STEP 1 - Declare the function 'makeLoadedDie'
function makeLoadedDie() {
    
    // STEP 2 - Declare the variable 'list' whis is an array
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */

    // STEP 3 - Declare the variable 'dieValue' 
    let dieValue = -1;
  
    // STEP 4 - Return function     
    return function() {
      
      // STEP 5 - Execute if statement incrementing through 'list.length " numbers in order
      if (dieValue < list.length - 1) dieValue++;
      else dieValue = 0;
      return list[dieValue];    
    }
  }
  
  // STEP 6 - Declare function expression
  var rollLoadedDie = makeLoadedDie();
  
  // STEP 7 - Print all items in array to standard output to test 'LoadedDie' funcitonality
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 1
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 2
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 3
  console.log(rollLoadedDie());  // 3