// @flow

import { pool } from '../mysql_pool';

export class Program {
  id: number = 0;
  name: string = '';
  studyCode: string = '';
}

class ProgramService {
  getPrograms(success: (Program[]) => mixed) {
    pool.query('SELECT * FROM Programs', (error, results: Program[]) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getProgram(id: number, success: Program => mixed) {
    pool.query('SELECT * FROM Programs WHERE id=?', [id], (error, results: Program[]) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  updateProgram(program: Program, success: () => mixed) {
    pool.query(
      'UPDATE Programs SET name=?, studyCode=? WHERE id=?',
      [program.name, program.studyCode, program.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  deleteProgram(program: Program, success: () => mixed) {
    pool.query(
      'DELETE FROM Programs WHERE id=?',
      [program.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }
  getStudents(program: Program, success: () => mixed){
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