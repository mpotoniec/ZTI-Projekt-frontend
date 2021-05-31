//import { render } from '@testing-library/react';
import React, { Component} from 'react';
import './css/elements.css';

class Login extends Component {

    state = {
        credentials: {username: '', password: ''},
        token: null
    }

    sendData = () => {
        this.props.parentCallback(this.state.token);
    }
    login = event => {
        console.log("Login for ", this.state.credentials,"...");
        fetch('http://127.0.0.1:8000/auth/', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                console.log(data.token)
                this.setState({token: data.token})
                this.sendData();
            }
        ).catch(error => console.error(error))
    }

    logout = event => {
        console.log("Logout...")
        this.setState({token: null})
        this.sendData();

        this.setState({token: null})
        this.sendData();
    }

    showtoken = event => {
        console.log("Token is: ", this.state.token)
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});

    }
    
    
    render() {
        return (
            <div>
                <h1>Zaloguj się</h1>
                <div className="Wrapper">

                        <div>Wprowadź login:</div>
                        <label className="Label">
                            
                            <input type='text' name='username' value={this.state.credentials.username} onChange={this.inputChanged} />
                        </label>
                    
                    <div>Wprowadź hasło:</div>
                    <label className="Label">
                        
                        <input type='text' name='password' value={this.state.credentials.password} onChange={this.inputChanged} />
                    </label>
                </div>

                <button className="Button" onClick={this.login}>Zaloguj</button>
                <button className="Button" onClick={this.logout}>Wyloguj</button>
                
            </div>
        );
    }
}


export default Login;
