var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
    
var result = input.map(
    
  // Working Code V1A
  // function() {
  //   for (var key1 in input) {
  //     return Math.sqrt(input[key1].x * input[key1].x + input[key1].y * input[key1].y);
  //     // return Math.sqrt(x * x + y * y);
  //   }
  // }

  // Working Code V2A  
  function(input) {
    return Math.hypot(input.x, input.y);
  }
      
);
    
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);