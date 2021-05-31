import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
import './css/navbar.css';

class Navbar extends Component {

    render(){
        let reservation;
        if(this.props.token != null){
            reservation = <NavLink className="Link" to="/reservation">Rezerwacja</NavLink>;
        }else{
            reservation = null;
        }
        console.log('props token', this.props.token);
        return (
            <div className="Navbar">
                <NavLink className="Link" to="/">O firmie</NavLink>
                <NavLink className="Link" to="/services">Lista usług</NavLink>
                <NavLink className="Link" to="/login">Logowanie</NavLink>
                <NavLink className="Link" to="/registration">Rejestracja</NavLink>
                {reservation}
                
            </div>
        );
        }
}

export default Navbar;