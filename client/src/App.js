import React from 'react';
import NavBar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todos';
import Todos1 from './Components/Todos1';
import Register from './Components/Register';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/todos" roles={["user","admin"]} component={Todos}/>
      <Route path="/todos1" roles={["user","admin"]} component={Todos1}/>
    </Router>
  );
}

export default App;
