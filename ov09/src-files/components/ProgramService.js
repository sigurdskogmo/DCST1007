import { pool } from '../mysql_pool';

class ProgramService {
  getPrograms(success) {
    pool.query('SELECT * FROM Programs', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getProgram(id, success) {
    pool.query('SELECT * FROM Programs WHERE id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  updateProgram(program, success) {
    pool.query(
      'UPDATE Programs SET name=?, studyCode=? WHERE id=?',
      [program.name, program.studyCode, program.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  deleteProgram(program, success) {
    pool.query(
      'DELETE FROM Programs WHERE id=?',
      [program.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  getStudents(program, success){
    let students = []
    pool.query(
      'select s.name, s.email from Students s join Programs p on p.studycode = s.studycode where p.id = ?',
      [program],
      (error, results) => {
        //console.log(results)
        success(results)
      }
    )
  }
}
export let programService = new ProgramService()