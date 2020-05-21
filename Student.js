const uuid = require('uuid');

function Student() {}

Student.create = function(name, grade) {
  const student = new Student();

  student.name = name;
  student.grade = grade;
  student.id = uuid.v4();

  return student;
};

const _p = Student.prototype;

_p.advancedGrade = function() {
  this.grade++;
};

_p.toString = function() {
  return this.id + '\t' + this.name;
};

module.exports = Student;
