import { Component } from "react";

class Services extends Component {
    state = {
        data_from_site: '',
        data_from_site2: []
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

                var obj_list = data.split('.')
                console.log(obj_list)
                var services = obj_list.map((service) => service.split(','))
                console.log(services)
                this.setState({data_from_site2: services})


            }
        ).catch(error => console.error(error))
    }

    componentDidMount(){
        this.setState({
        });
        this.get_data();
    }


    render() {
        console.log(this.state.data_from_site2)
        return (
            <div>
                <h1>Spis dostępnych usług firmy wulkanizacyjnej</h1>
                {this.state.data_from_site2.map((service) => 
                    <p>Nazwa usługi: {service[0]}, czas trwania usługi: {service[3]}, koszt usługi: {service[2]}<p>Opis usługi: {service[1]}</p></p>)}
            </div>
        )
    }
}

export default Services;
