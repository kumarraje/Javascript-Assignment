// Initial array of students
let students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
];

// a. Add a Student
function addStudent(student) {
  students.push(student);
}

// b. Update Student Information by ID
function updateStudent(id, updatedInfo) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedInfo };
  } else {
    console.log(`Student with ID ${id} not found.`);
  }
}

// c. Delete a Student by ID
function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
}

// d. List All Students
function listAllStudents() {
  console.log("All Students:");
  students.forEach(student => {
    console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
  if (students.length === 0) return 0;
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Example usage:
addStudent({ id: 4, firstName: "Alice", lastName: "Brown", age: 21, grade: "B" });
updateStudent(2, { lastName: "Williams", age: 23 });
deleteStudent(1);
listAllStudents();
console.log("Students with grade A:", findStudentsByGrade("A"));
console.log("Average Age:", calculateAverageAge().toFixed(2));
