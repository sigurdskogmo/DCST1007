import * as React from "react"
import { Component } from "react-simplified"
import { NavLink } from 'react-router-dom'
import { pool } from '../mysql_pool'


class StudentList extends Component {
  students = []

  render() {
    return (
      <div>
        <h3>Studenter:</h3>
        <ul>
          {this.students.map(student => (
            <li key={student.id}>
              <NavLink to={'/students/' + student.id}>{student.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  mounted() {
    pool.query('SELECT id, name FROM Students', (error, results) => {
      if (error) return console.error(error); // If error, show error in console (in red text) and return

      this.students = results
    })
  }
}

export default StudentList