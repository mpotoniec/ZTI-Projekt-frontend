import React, { Component} from 'react';
import './css/elements.css';

class Registration extends Component {

    state = {
        credentials: {username: '', email: '', password: ''},
        response: null
    }

    register = event => {
        fetch('http://127.0.0.1:8000/accounts/users/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                console.log(data)
                if(data.email.length == 1){
                    this.setState({response: 'Nieprawidłowy email'})
                    console.log('Nieprawidłowy email')
                }
                else if (data.username.length == 1) {
                    this.setState({response: 'Użytkownik o tej nazwie już istnieje'})
                    console.log('Użytkownik o tej nazwie już istnieje')
                }else{
                    this.setState({response: 'Rejestracja udana'})
                    console.log('Rejestracja udana')
                }
            }
        ).catch(error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});

    }
    
    render() {
        return (
            <div>
                <h1>Zarejestruj się</h1>
                    <div className="Wrapper">
                        <div>Wprowadź login:</div>
                         <label>
                            <input type='text' name='username' value={this.state.credentials.username} onChange={this.inputChanged} />
                        </label>

                        <div>Wprowadź email:</div>
                        <label>
                            <input type='text' name='email' value={this.state.credentials.email} onChange={this.inputChanged} />
                        </label>

                        <div>Wprowadź hasło:</div>
                        <label>
                            <input type='text' name='password' value={this.state.credentials.password} onChange={this.inputChanged} />
                        </label>

                        </div>
                            <button className="Button" onClick={this.register}>Rejestracja</button>

                            <p>{this.state.response}</p>
                        </div>

        );
    }
}

export default Registration;