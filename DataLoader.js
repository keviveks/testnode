const fs = require('fs');

function DataLoader() {}

const _p = DataLoader.prototype;

_p.getStudent = function(studentId, cb) {
  const filePath = './files/students/' + studentId + '.json';

  fs.readFile(filePath, function(err, data) {
    if (err) {
      if (err.code && err.code === 'ENOENT') {
        throw new Error(studentId + ' does not exist');
      }
      throw err;
    }

    cb(JSON.parse(data));
  });
};

_p.getStudentSync = function(studentId) {
  const filePath = './files/students/' + studentId + '.json';

  return JSON.parse(fs.readFileSync(filePath));
};

_p.getCourseSync = function() {}

_p.saveCourseSync = function() {}

module.exports = DataLoader;
