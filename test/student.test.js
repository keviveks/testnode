const chai = require('chai');

const Student = require('../Student');
const Course = require('../Course');


const expect = chai.expect;
const should = chai.should();


describe.skip('Student Test', () => {
  const testStudentName = 'Test Student';
  const testStudentGrade = 5;
  it('should save student id along with id', () => {
    const s = Student.create(testStudentName, testStudentGrade);

    should.exist(s.name);
    s.name.should.equal(testStudentName);

    should.exist(s.grade);
    s.grade.should.equal(testStudentGrade);

    should.exist(s.id);
  });

  it('should increment student grade by 1 when advancedGrade function get called', () => {
    const s = Student.create(testStudentName, testStudentGrade);

    s.advancedGrade();

    should.exist(s.grade);
    s.grade.should.equal(testStudentGrade + 1);
  });
});
