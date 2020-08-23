import * as React from 'react';
import { Component } from 'react-simplified';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Route } from 'react-router-dom';
//import "./style.css";

class Menu extends Component {
  render() {
    const a = {
      textDecoration: "none"
    }
    return (
      <div>
        <NavLink style = {a} to="/">Min CV</NavLink>{'  '}
        <NavLink style = {a} to="/page1">Utdanning</NavLink>{'  '}
        <NavLink style = {a} to="/page2">Arbeidserfaring</NavLink>{'  '}
        <NavLink style = {a} to="/page3">Interesser</NavLink>
      </div>
    );
  }
} 

class Home extends Component {
  render() {
    return <div>Velkommen til min CV</div>;
  }
}

class Page1 extends Component {
  render() {
    return <div>Masse utdanning... Det meste fra NTNU</div>;
  }
}

class Page2 extends Component {
  render() {
    return <div>Masse arbeidserfaring :-)</div>;
  }
}

class Page3 extends Component {
  render() {
    return <div>Masse interesser: trening, gaming, IT...</div>
  }
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
