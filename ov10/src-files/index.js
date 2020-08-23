// @flow

import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
import { Student, studentService } from './components/StudentService';
import { createHashHistory } from 'history';
import ProgramList from './components/ProgramList'
import ProgramEdit from './components/ProgramEdit'

import { Card, Row, Column, NavBar, Button, Form } from './components/widgets';


const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class Menu extends Component {
  render() {
    return (
      <NavBar brand="StudAdm">
        <NavBar.Link to="/students">Students</NavBar.Link>
        <NavBar.Link to="/programs">Programs</NavBar.Link>
      </NavBar>
    );
  }
}

class Home extends Component {
  render() {
    return <Card title="Welcome">Welcome to StudAdm</Card>
  }
}

class StudentList extends Component {
  students: Student[] = [];

  render() {
    return (
      <Card title="Students">
        {this.students.map(student => (
          <Row key={student.id}>
            <Column>
              <NavLink to={'/students/' + student.id + '/edit'}>{student.name}</NavLink>
            </Column>
          </Row>
        ))}
      </Card>
    );
  }

  mounted() {
    studentService.getStudents(students => {
      this.students = students
    })
  }
}

class StudentEdit extends Component<{ match: { params: { id: number } } }> {
  student = new Student();

  render() {
    if (!this.student) return null;

    return (
      <div>
        <Card title="Edit student">
          <Form.Label>Name:</Form.Label>
          <Form.Input
            type="text"
            value={this.student.name}
            onChange={event => (this.student.name = event.currentTarget.value)}
          />
          <Form.Label>Study code:</Form.Label>
          <Form.Input
          type="text"
          value={this.student.studyCode}
          onChange={event => (this.student.studyCode = event.currentTarget.value)}
          />
          <Form.Label>Email:</Form.Label>
          <Form.Input
            type="text"
            value={this.student.email}
            onChange={event => (this.student.email = event.currentTarget.value)}
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
      </div>
    );
  }

  mounted() {
    studentService.getStudent(this.props.match.params.id, student => {
      this.student = student;
    })
  }

  save() {
    studentService.updateStudent(this.student, () => {
      history.push('/students')
    })
  }
  cancel() {
    history.push('/students');
  }
  delete() {
    studentService.deleteStudent(this.student, () => {
      history.push('/')
    })
  }
}


let root = document.getElementById("root")
if (root)
  ReactDOM.render(
    <HashRouter>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/students" component={StudentList} />
      <Route path="/students/:id" component={StudentEdit} />
      <Route exact path="/programs" component={ProgramList} />
      <Route path="/programs/:id/edit" component={ProgramEdit} />
    </HashRouter>,
    root
  )


