import * as React from "react"
import { Component } from "react-simplified"
import { pool } from "../mysql_pool"
import { NavLink } from "react-router-dom"

class ProgramList extends Component {
  programs = null;
  
  render() {
    if (this.programs == null) return null;
    return (
      <div>
        <h3>Studieprogram:</h3>
        <ul>
          {this.programs.map(program => (
            <li key={program.id}>
              <NavLink to={'/programs/' + program.id}>{program.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  mounted() {
    pool.query('SELECT id, name FROM Programs', (error, results) => {
      if (error) return console.error(error); // If error, show error in console (in red text) and return

      this.programs = results
    });
  }
}

export default ProgramList