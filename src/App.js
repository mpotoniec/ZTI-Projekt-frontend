//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home'
import Login from './components/login';
import Registration from './components/registration';
import Reservation from './components/reservation';
import Services from './components/services';

class App extends React.Component {
  state = { message: "" }

  callbackFunction = (childData) => {
      this.setState({message: childData})
  }
render(){
  console.log(this.state.message);
  return (
    <div>
      <Router>
        <div className="App">
          <Route exact path="/" component = {Home} />
          <Route path="/login" >
            <Login parentCallback = {this.callbackFunction}/>
          </Route>
          <Route path="/registration" component = {Registration} />
          <Route path="/services" component = {Services} />
          <Route path="/reservation" >
            
          </Route>
          
        </div>
      </Router>
      <Reservation token={this.state.message}/>
    </div>
  );
  }
}

export default App;
