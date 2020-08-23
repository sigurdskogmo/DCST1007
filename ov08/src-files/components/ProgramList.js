import * as React from "react"
import { Component } from "react-simplified"
import { NavLink } from "react-router-dom"
import { programService } from "./ProgramService"

class ProgramList extends Component {
  programs = []

  render() {
    return (
      <div>
        <h3>Program</h3>
        <ul>
          {this.programs.map(program => (
          <li key={program.id}>
            <NavLink to={'/programs/' + program.id + '/edit'}>{program.name}</NavLink>
          </li>
          ))}
        </ul>
      </div>
    )
  }

  mounted() {
    programService.getPrograms(programs => {
      this.programs = programs
    })
  }
}

export default ProgramList