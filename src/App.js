//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home'
import Login from './components/login';
import Registration from './components/registration';
import Reservation from './components/reservation';
import Services from './components/services';
import Navbar from './components/navbar';

class App extends React.Component {
  state = { token: null }

  callbackFunction = (childData) => {
      this.setState({token: childData})
  }
render(){
  let reservation;
  if(this.state.token != null){
    reservation = <Reservation token={this.state.token}/>;
  }else{
    reservation = null;
  }
  console.log('token', this.state.token);
  console.log(reservation);
  return (
    <div>
      
      <Router>
        <Navbar token={this.state.token}/>
        <div className="App">
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/login" >
              <Login parentCallback = {this.callbackFunction}/>
            </Route>
            <Route path="/registration" component = {Registration} />
            <Route path="/services" component = {Services} />
            <Route path="/reservation" >
              <Reservation token={this.state.token}/>
            </Route>
          </Switch>
        </div>
      </Router>

    
      
    </div>
  );
  }
}

export default App;
