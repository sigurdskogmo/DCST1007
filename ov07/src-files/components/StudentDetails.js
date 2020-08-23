import React from "react"
import { Component } from "react-simplified"
import { pool } from '../mysql_pool'

class StudentDetails extends Component {
  student = null

  render() {
    if (!this.student) return null

    return (
      <ul>
        <li>Name: {this.student.name}</li>
        <li>Email: {this.student.email}</li>
        <li>Studieprogram: {this.student.studyCode}</li>
      </ul>
    )
  }

  mounted() {
    pool.query(
      'SELECT name, email, studyCode FROM Students WHERE id=?', 
      [this.props.match.params.id], 
      (error, results) => {
        if (error) return console.error(error); // If error, show error in console (in red text) and return

        this.student = results[0]
    })
  }
}

export default StudentDetails