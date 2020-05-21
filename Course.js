function Course() {}

Course.create = function(name, code, description) {
  const course = new Course();

  course.name = name;
  course.code = code;
  course.description = description;

  course.students = [];
  course.timings = [];

  return course;
};

const _p = Course.prototype;

_p.registerStudent = function(student) {
  this.students.push(student);
};

_p.unregisterStudent = function(studentId) {
  const me = this;

  if (
    !this.students.some((s, i) => {
      if (s.id === studentId) {
        me.students.splice(i, 1);
        return true;
      }
    })
  ) {
    throw new Error('Student ' + studentId + ' not registered in this course');
  }
};

_p.addTimes = function(dates, times) {
  const me = this;

  if (!Array.isArray(dates)) {
    dates = [dates];
  }

  if (!Array.isArray(times)) {
    times = [times];
  }

  days.forEach(function(day) {
    times.forEach(function(time) {
      me.times.push({
        'day': day,
        'time': time,
      });
    });
  });
};

_p.showSchedule = function() {
  let scheduleString = '';

  this.times.forEach(function(t) {
    if (scheduleString != '') {
      scheduleString += '\n';
    }

    scheduleString += t.day + ' at ' + t.time;
  });

  return scheduleString;
};

_p.showStudent = function() {
  let studentString = '';

  this.students.forEach(function(s) {
    if (studentString != '') {
      studentString += '\n';
    }

    studentString += s.toString();
  });

  return studentString;
};

module.exports = Course;
