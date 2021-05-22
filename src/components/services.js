import { Component } from "react";

class Services extends Component {

    get_data = event => {
        fetch('http://127.0.0.1:8000/services/', {
         method: 'GET',
        })
        .then(data => data.json())
        .then(
            data => {
                console.log("fetching...")
                console.log(data)
            }
        ).catch(error => console.error(error))
    }


    render() {
        return (
            <div>
                <h1>Site</h1>
                <button onClick={this.get_data}>get</button>
            </div>
        )
    }
}

export default Services;
