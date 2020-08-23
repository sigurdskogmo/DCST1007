import * as React from "react"
import { Component } from "react-simplified"
import { NavLink } from "react-router-dom"
import { programService } from "./ProgramService"
import { Card, Row, Column, NavBar, Button, Form } from './widgets';


class ProgramList extends Component {
  programs = []

  render() {
    return (
      <Card title="Programs">
        
        {this.programs.map(program => (
        <Row key={program.id}>
          <Column>
            <NavLink to={'/programs/' + program.id + '/edit'}>{program.name}</NavLink>
          </Column>
        </Row>
        ))}
      </Card>
    )
  }

  mounted() {
    programService.getPrograms(programs => {
      this.programs = programs
    })
  }
}

export default ProgramList