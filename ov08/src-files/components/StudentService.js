import { pool } from '../mysql_pool';

class StudentService {
  getStudents(success) {
    pool.query('SELECT * FROM Students', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getStudent(id, success) {
    pool.query('SELECT * FROM Students WHERE id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  updateStudent(student, success) {
    pool.query(
      'UPDATE Students SET name=?, email=?, studyCode=? WHERE id=?',
      [student.name, student.email, student.studyCode, student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  deleteStudent(student, success) {
    pool.query(
      'DELETE FROM Students WHERE id=?',
      [student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
}
export let studentService = new StudentService();
