import React, { Component} from 'react';

class Registration extends Component {

    state = {
        credentials: {username: '', email: '', password: ''}
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
                console.log(data.token)
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
                <h1>Register User</h1>
                <label>
                    Username:
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.inputChanged} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type='text' name='email' value={this.state.credentials.email} onChange={this.inputChanged} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type='text' name='password' value={this.state.credentials.password} onChange={this.inputChanged} />
                </label>
                <br/>

                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default Registration;