//import { render } from '@testing-library/react';
import React, { Component} from 'react';

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
                <h1>login user</h1>
                <label>
                    Username:
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.inputChanged} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type='text' name='password' value={this.state.credentials.password} onChange={this.inputChanged} />
                </label>
                <br/>

                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
                <button onClick={this.showtoken}>showtoken</button>
                <h1>Token: { this.state.token }</h1>
            </div>
        );
    }
}


export default Login;
