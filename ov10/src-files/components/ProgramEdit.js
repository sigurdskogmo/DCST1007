// @flow

import * as React from "react"
import { createHashHistory } from 'history';
import { Component } from "react-simplified"
import { Program, programService } from './ProgramService'
import { Student } from './StudentService';


import { Card, Row, Column, NavBar, Button, Form } from './widgets';

const history = createHashHistory() // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class ProgramEdit extends Component<{ match: { params: { id: number } } }> {
  program = new Program()
  students: Student[] = []

  render() {
    if (!this.program) return null

    return (
      <div>
        <Card title="Edit student">
          <Form.Label>Name:</Form.Label>
          <Form.Input
            type="text"
            value={this.program.name}
            onChange={event => (this.program.name = event.currentTarget.value)}
          />
          <Form.Label>Studycode:</Form.Label>
          <Form.Input
            type="text"
            value={this.program.studyCode}
            onChange={event => (this.program.studyCode = event.currentTarget.value)}
          />
        </Card>
        <Card>
          <Row>
            <Column>
              <Button.Success onClick={this.save}>Save</Button.Success>
            </Column>
            <Column right>
              <Button.Light onClick={this.cancel}>Cancel</Button.Light>
              <Button.Danger onClick={this.delete}>Delete</Button.Danger>
            </Column>
          </Row>
        </Card>
        <Card title="Students:">
          <ul>
            {this.students.map(student => <li key={student.id}>{student.name}</li>)}
          </ul>
        </Card>
        
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
  cancel() {
    history.push('/programs');
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