import { Component } from "react";

class Services extends Component {
    state = {
        data_from_site: ''
    };

    get_data = event => {
        fetch('http://127.0.0.1:8000/services/', {
         method: 'GET',
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
        });
        this.get_data();
    }


    render() {
        return (
            <div>
                <h1>Spis dostępnych usług firmy wulkanizacyjnej</h1>
                <p> { this.state.data_from_site }</p>
            </div>
        )
    }
}

export default Services;
