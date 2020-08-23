import * as React from "react"
import { createHashHistory } from 'history';
import { Component } from "react-simplified"
import { programService } from './ProgramService'


const history = createHashHistory() // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class ProgramEdit extends Component {
  program = null
  students = []

  render() {
    if (!this.program) return null

    return (
      <div>
        Name:{' '}
        <input
          type="text"
          value={this.program.name}
          onChange={event => (this.program.name = event.currentTarget.value)}
        />
        <br />
        Kode:{' '}
        <input
          type="text"
          value={this.program.studyCode}
          onChange={event => (this.program.studyCode = event.currentTarget.value)}
        />
        <br />
        <button type="button" onClick={this.save}>
          Save
        </button>
        <br /><br />
        <button type="button" onClick={this.delete}>
          DELETE PROGRAM
        </button>
        <br />
        Studenter:
          <ul>
            {this.students.map(student => <li key={student.id}>{student.name}</li>)}
          </ul>
      </div>
    )
  }

  mounted() {
    programService.getProgram(this.props.match.params.id, program => {
      this.program = program
    })
    programService.getStudents(this.props.match.params.id, students => {
      this.students = students
    })
  }

  save() {
    programService.updateProgram(this.program, () => {
      history.push('/programs')
    })
  }
  delete() {
    programService.deleteProgram(this.program, () => {
      history.push('/')
    })
  }
}

export default ProgramEdit