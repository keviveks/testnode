const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

chai.should();

// Spies - to spy on single function

describe.skip('Sinon Spies Test', () => {
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
      }
    };

    schedule = {
      dropClass: function() {
        console.log('class dropped!');
      }
    };
  });

  describe('Callback function called', () => {
    it('should call the callback method by direct way', () => {
      let called = false;
      function callback() {
        called = true;
      }
      student.dropClass(1, callback);
      expect(called).to.be.true;
    });

    it('should call the callback method with sinon spy method', () => {
      const spy = sinon.spy();
      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it('should call the callback with console message with sinon spy', () => {
      function cbWithConsole() {
        console.log('Callback function got called!!!');
      }
      const spy = sinon.spy(cbWithConsole);
      student.dropClass(1, spy);
      spy.called.should.be.true;
    });

    it('should call the method even if method or object method', () => {
      sinon.spy(schedule, 'dropClass');
      student.dropClass(1, schedule);
      schedule.dropClass.called.should.be.true;
    });
  });
});
