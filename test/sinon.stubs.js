const chai = require('chai');
const sinon = require('sinon');

chai.should();

// Spies - to spy on single function

// Stubs - to watch entire object (stub will have all the functionalities of spy)
// stub does not call inner implementation of underlying method

describe('Sinon Stubs Test', () => {
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


  describe('Studentss with Stub', () => {
    it('should call a stubbed method', () => {
      var stub = sinon.stub(schedule);
      student.dropClass(1, stub);
      schedule.dropClass.called.should.be.true;
    });

    it('should return true if class is not full', () => {
      const stub = sinon.stub(schedule);
      stub.isClassFull.returns(false);

      const returnVal = student.addClass(stub);
      returnVal.should.be.true;
    });
  });
});
