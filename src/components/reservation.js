import React, { Component } from "react";

class Reservation extends Component {
    state = {
        token: null,
        data_from_site: ''
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
                this.setState({data_from_site: data})
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
                <p> { this.state.data_from_site }</p>

            </div>
        )
    }
}

export default Reservation;
//<p> {this.state.token}</p>
