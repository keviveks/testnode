const chai = require('chai');
const sinon = require('sinon');

chai.should();

// Spies - to spy on single function

// Stubs - to watch entire object (stub will have all the functionalities of spy)
// stub does not call inner implementation of underlying method

// Mock - mocks object

describe('Sinon Mock Test', () => {
  let student;
  let schedule;

  beforeEach(() => {
    student = {
      dropClass: function(classId, cb) {
        if (cb.dropClass) {
          cb.dropClass();
        } else {
          cb();
        }
      },
      addClass: function(schedule) {
        if (!schedule.isClassFull()) {
          return true;
        } else {
          return false;
        }
      }
    };

    schedule = {
      dropClass: function() {
        console.log('class dropped!');
      },
      isClassFull: function() {
        return true;
      }
    };
  });


  describe('Students with Mock', () => {
    it('mock schedule', () => {
      const scheduleMock = sinon.mock(schedule);
      const expectation = scheduleMock.expects('isClassFull').once();
      student.addClass(schedule);
      expectation.verify();
    });
  });
});
