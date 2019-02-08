// We have a list of students that we woudl like to sort in alphabetical order. If students have the same name,then we prioritize the older student first.

// Step 1 - Sort student list by name
// Step 2 - Sort student list by age
// Step 3 - Take student list after sorted by age and sort by name
// Step 4 - print to standard output


// Step 1 
var students = [
    {id: 1, name: "bruce", age: 40 },
    {id: 2, name: "zoidberg", age: 22 },
    {id: 3, name: "alex", age: 22 },
    {id: 4, name: "alex", age: 30 }
];


// Step 1 - Compare student list by name
    // The "compare" function must take two arguments, often referred to as a and b. 
    // Then make compare function return 0, greater than 0, or less than 0, based on these values, a and b.
        // Return greater than 0 if a is greater than b
        // Return 0 if a equals b
        // Return less than 0 if a is less than b
    // Then, when you call 'sort()' with compare function, the compare function is called on pairs in the to-be-sorted list, to determine the proper ordering.
        // Stack Overflow Article - http://ow.ly/yxGr30nCZxi

function sortName(stdntA, stdntB) {
    let nameA = stdntA.name.toLowerCase(), nameB = stdntB.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}


// Step 2 - Compare student list by age
    // Subtracting student 1's age from student 2's age will return a positive value(1), negative value(-1) or zero(0). 
        // This allows us to call 'sort()' with this compare function, the compare function is called on pairs in the to-be-sorted list, to determine the proper ordering.

function sortAge(stdntA, stdntB) {
    return stdntB.age - stdntA.age;
}


// Step 3 - Execute 'sort()' againest sorted-list from sortAge function and then the sorted-list from sortName function and then print to standard output
    // This final sorted list will deal with Javascript's lexigraphical sorting default 

console.log(students.sort(sortAge).sort(sortName));
  