import React, { Component, useState } from "react";
import './css/elements.css';
import DateTimePicker from 'react-datetime-picker';

class Reservation extends Component {
    state = {
        token: null,
        data_from_site: '',
        services: [""],
        stations: [""],
        service_to_send: '',
        station_to_send: '',
        to_post_data: '',
        reservation_result: '',
        date: ''
    };

    get_data = event => {
        fetch('http://127.0.0.1:8000/reservation/', {
         method: 'GET',
         headers: {"Authorization": "Token " + this.props.token},
         body: JSON.stringify(this.state.credentials)
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

    get_info = event => {
        fetch('http://127.0.0.1:8000/services/getinfo/', {
         method: 'GET',
        })
        .then(data => data.json())
        .then(
            data => {
                console.log("fetching...")
                data = data.split("|")
                var services = data[0].split("-")
                var stations = data[1].split("-")
                this.setState({services: services})
                this.setState({stations: stations})

                this.setState({service_to_send: services[0]})
                this.setState({station_to_send: stations[0]})
            }
        ).catch(error => console.error(error))
    }

    make_reservation = event => {

        var to_reserve = this.state.service_to_send + '-' + this.state.station_to_send
        this.setState({to_post_data: to_reserve})
        console.log('Czas do przesłania: ', this.state.date)
        to_reserve += '-' + this.state.date

        fetch('http://127.0.0.1:8000/reservation/reserve/', {
         method: 'POST',
         headers: {"Authorization": "Token " + this.props.token},
         body: JSON.stringify(to_reserve)
        })
        .then(data => data.json())
        .then(
            data => {
                console.log("fetching...")
                console.log('to send', this.state.to_post_data)
                console.log('response',data)
                this.setState({reservation_result: data})
            }
        ).catch(error => console.error(error))
    }

    componentDidMount(){
        this.setState({
            token: this.props.token,
            value: new Date()
        });
        this.get_data();
        this.get_info();
    }

    handle_serviceChange = event => {
        var service = event.target.value
        this.setState({service_to_send: service})
        console.log(event.target.value)
    }

    handle_stationChange = event => {
        var station = event.target.value
        this.setState({station_to_send: station})
        console.log(event.target.value)
    }

    render() {
        console.log(this.props.token);
        console.log(this.state.date);

        return (
            <div>
                <h1>Informacje o Twoich rezerwacjach</h1>
            
                <p> { this.state.data_from_site }</p>

                <h1>Dokonaj rezerwacji</h1>

                <div className="container pt~5">
                    <select className="custom-select" onChange={this.handle_serviceChange}>
                        {this.state.services.map(station => 
                            <option value={station}>{station}</option>
                        )};
                    </select>

                    <select className="custom-select" onChange={this.handle_stationChange}>
                        {this.state.stations.map(station => 
                            <option value={station}>{station}</option>
                        )};
                    </select>
                </div>
                            
                <div>
                    <DateTimePicker
                        onChange={(date) => this.setState({ date })}
                        value={this.state.date}
                        minDate={new Date()}
                    />
                </div>
                <button className="Button" onClick={this.make_reservation}>Zarezerwuj</button>

                <p> { this.state.reservation_result }</p>
            </div>
        )
    }
}

export default Reservation;