// a) Create a student object and prevent extensions
const student = {
  name: 'John',
  age: 21
};

Object.preventExtensions(student);

// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property
const teacher = {
  subject: 'Math'
};

// d) Seal the teacher object
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print the results
console.log('Is student object extensible?', extensibleStatus);
console.log('Is teacher object sealed?', sealedStatus);
