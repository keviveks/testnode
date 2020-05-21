const chai = require('chai');

const Student = require('../Student');
const Course = require('../Course');


const expect = chai.expect;
const should = chai.should();


describe.skip('Course Test', () => {
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

  describe('Course Timings', () => {
    it('should add date/time to the course', () => {
      const course = Course.create(testCourseName, testCourseCode, testCourseDescription);

      const days = ['Monday', 'Wednesday', 'Friday'];
      const times = ['10:00', '15:00'];

      course.addTimes(days, times);

      course.timings.length.should.equal(6);
      course.timings[2].should.eql({
        day: 'Wednesday',
        time: '10:00',
      });
    });

    it('should throw error if pass invalid day to the course', () => {
      const course = Course.create(testCourseName, testCourseCode, testCourseDescription);
      const day = 'invalidday';
      const time = '10:00';

      expect(() => {
        course.addTimes(day, time);
      }).to.throw();
    });
  });
});
