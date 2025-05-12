function displayStudentInfo(student) {
  for (let key in student) {
    console.log(`Property: ${key}, Value: ${student[key]}`);
  }
}

// Example usage:
const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true
};

displayStudentInfo(student);
