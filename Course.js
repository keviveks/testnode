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

_p.addTimes = function(days, times) {
  const me = this;

  if (!Array.isArray(days)) {
    days = [days];
  }

  if (!Array.isArray(times)) {
    times = [times];
  }

  const validDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  days.forEach(function(day) {
    if (validDays.indexOf(day) === -1) {
      throw new Error(day + ' is not a valid day!');
    }

    times.forEach(function(time) {
      me.timings.push({
        'day': day,
        'time': time,
      });
    });
  });
};

_p.showSchedule = function() {
  let scheduleString = '';

  this.timings.forEach(function(t) {
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
