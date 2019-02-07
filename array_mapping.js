var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
    
// var result = input.map(
    
//   // Working Code V1A
//   // function() {
//   //   for (var key1 in input) {
//   //     return Math.sqrt(input[key1].x * input[key1].x + input[key1].y * input[key1].y);
//   //     // return Math.sqrt(x * x + y * y);
//   //   }
//   // }

//   // Working Code V2A  
//   // function(input) {
//   //   return Math.hypot(input.x, input.y);
//   // }

//   // Working Code V3A  
//   element => Math.sqrt(element.x ** 2 + el.y ** 2)
      
// );

// Working Code V1A - NOT WORKING
// var result = input.map(
//   function() {
//     for (var key1 in input) {
//       return Math.sqrt(input[key1].x * input[key1].x + input[key1].y * input[key1].y);
//     }
//   }
// );

// Working Code V2A - WORKING BUT USES Math.hypot()
// var result = input.map(
//   function(input) {
//     return Math.hypot(input.x, input.y);
//   }
// );l

// Working Code V3A - WORKING BUT USES Math.hypot()
var result = input.map(
  element => Math.sqrt(element.x ** 2 + element.y ** 2)
);






    
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);