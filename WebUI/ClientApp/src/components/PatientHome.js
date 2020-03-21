import React, { Component } from 'react';
import Patient from './Patient';

export class PatientHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            isLoaded: false,
            patients: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.populatePatientList();
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
        this.setState({
            name: '',
            email: '',
            mobile: ''
        });

        this.populatePatientList();
        event.preventDefault();
    }
        

    render() {
        let contents = !this.state.isLoaded
            ? <p><em>Loading...</em></p>
            : <Patient patients={this.state.patients} />;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Patient Name" value={this.state.name} onChange={this.handleChange} required />
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        <input type="text" name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <hr/>
                <h3 id="tabelLabel" >Patient List</h3>
                {contents}
            </div>
        );
    }

    createPatient(patient) {
        fetch('http://localhost:62177/api/patients', {
            method: 'POST',
            headers: {
                "Content-type": "application/json charset=utf-8"
            },
            body: JSON.stringify(patient),
        });
    }

    async populatePatientList() {
        const response = await fetch('http://localhost:62177/api/patients');
        const data = await response.json();
        this.setState({ patients: data, isLoaded: true });

    }
    
}