import * as React from "react"
import { Component } from "react-simplified"
import { pool } from '../mysql_pool'

class ProgramDetails extends Component{
  program = null
  students = [];
  
  render() {
    if(!this.program) return null;

    return (
      <div>
        <h3>Studieprogram detaljer:</h3>
        <ul>
          <li>Navn: {this.program.name}</li>
          <li>Kode: {this.program.studyCode}</li>
          <li>
            Studenter:
            <ul>
              {this.students.map(student => <li key={student.id}>{student.name}</li>)}
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  mounted() {
    pool.query(
      'SELECT * FROM Programs WHERE Programs.id=?', 
      [this.props.match.params.id], 
      (error, results) => {
        if (error) return console.error(error); // If error, show error in console (in red text) and return
        this.program = results[0]
        
        pool.query(
          'SELECT * FROM Students WHERE studyCode = ?', [this.program.studyCode],
          (error, results) => {
            if (error) return console.error(error) // If error, show error in console (in red text) and return
            this.students = results;
          })
      })
    
  }
}

export default ProgramDetails