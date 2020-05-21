const chai = require('chai');
const DataLoader = require('../DataLoader');

const should = chai.should();
const dataloader = new DataLoader();

describe('DataLoader Test', () => {
  it('file read sync test', () => {
    const student = dataloader.getStudentSync(1);

    should.exist(student.name);
    student.name.should.equal('testfile studentname');
  });

  it('get students asynchronosly', function(done) {
    dataloader.getStudent(1, function(student) {
      should.exist(student.name);
      student.name.should.equal('testfile studentname');
      done();
    });
  });
});
