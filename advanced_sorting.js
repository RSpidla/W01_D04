var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];
  
  function sortByName(student1, student2) {
    var nameA = student1.name.toLowerCase(), nameB = student2.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }
  
  function sortByAge(student1, student2) {
    return student2.age - student1.age;
  }
  
  console.log(
    students.sort(sortByAge).sort(sortByName)
  )
  