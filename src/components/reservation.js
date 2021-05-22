import React, { Component } from "react";

class Reservation extends Component {
    state = {
        token: null
    };

    get_data = event => {
        fetch('http://127.0.0.1:8000/reservation/', {
         method: 'GET',
         headers: {"Authorization": "Token " + this.props.token},
        })
        .then(data => data.json())
        .then(
            data => {
                console.log("fetching...")
                console.log(data)
            }
        ).catch(error => console.error(error))
    }

    componentDidMount(){
        this.setState({
            token: this.props.token
        });
    }

    render() {
        console.log(this.props.token);
        
        return (
            <div>
                <h1>Site</h1>
                <button onClick={this.get_data}>get</button>
                <p> pokaz sie {this.state.token}</p>

            </div>
        )
    }
}

export default Reservation;
