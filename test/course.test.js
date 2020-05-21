const chai = require('chai');

const Student = require('../Student');
const Course = require('../Course');


const expect = chai.expect;
const should = chai.should();


describe('Course Test', () => {
  const testCourseName = 'Awesome Course';
  const testCourseCode = 'AWE-2020';
  const testCourseDescription = 'This course will be awesome';

  let student;

  beforeEach(() => {
    student = Student.create('Test Student', 5);
  });

  it('should save new course data', () => {
    const c = Course.create(testCourseName, testCourseCode, testCourseDescription);

    should.exist(c.name);
    should.exist(c.code);
    should.exist(c.description);

    should.exist(c.students);
    c.students.should.eql([]);
  });

  describe('Student registration', () => {
    it('should add student object into couse students array', () => {
      const course = Course.create(testCourseName, testCourseCode, testCourseDescription);
      course.registerStudent(student);

      course.students.length.should.equal(1);
      course.students[0].id.should.equal(student.id);
    });
  });

  describe('Student unregister', () => {
    it('should throw error when try to unregister invalid student', () => {
      const course = Course.create(testCourseName, testCourseCode, testCourseDescription);

      expect(() => {
        course.unregisterStudent('invalid-student-id');
      }).to.throw();
    });
  });
});
