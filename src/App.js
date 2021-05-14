//import logo from './logo.svg';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component = {Home} />
        <Route path="/login" component = {Login} />
        <Route path="/registration" component = {Registration} />
      </div>
    </Router>
  );
}

export default App;
