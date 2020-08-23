import * as React from "react"
import Menu from './components/Menu'
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import StudentList from './components/StudentList'
import StudentDetails from './components/StudentDetails'
import ProgramList from './components/ProgramList'
import ProgramDetails from './components/ProgramDetails'

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Menu />
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/students/:id" component={StudentDetails} />
            <Route exact path="/programs" component={ProgramList} />
            <Route exact path="/programs/:id" component={ProgramDetails} />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App