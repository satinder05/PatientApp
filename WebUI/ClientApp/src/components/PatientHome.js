import React, { Component } from 'react';

export class PatientHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        const newPatient = {
            name: this.state.name,
            email : this.state.email,
            mobile : this.state.mobile
        };
        
        this.createPatient(newPatient);
        event.preventDefault();
    }
        

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Patient Name" onChange={this.handleChange} required />
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                    <input type="text" name="mobile" placeholder="Mobile" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

    createPatient(patient) {
        console.log(JSON.stringify(patient));
        fetch('http://localhost:62177/api/patients', {
            method: 'POST',
            headers: {
                "Content-type": "application/json charset=utf-8"
            },
            body: JSON.stringify(patient),
        });
    }
    
}