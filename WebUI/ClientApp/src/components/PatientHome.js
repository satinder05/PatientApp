import React, { Component } from 'react';
import Patient from './Patient';

export class PatientHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            emailError : '',
            mobileError : '',
            isLoaded: false,
            patients: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.populatePatientList = this.populatePatientList.bind(this);
    }

    componentDidMount() {
        this.populatePatientList();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    

    handleSubmit(event) {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            const newPatient = {
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile
            };
            this.createPatient(newPatient);
            this.clearState();
        }
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
                        <span style={{ fontSize: 14, color: "red" }}>{this.state.emailError}</span>
                        <input type="text" name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleChange} />
                        <span style={{ fontSize: 14, color: "red" }}>{this.state.mobileError}</span>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <hr/>
                <h3 id="tabelLabel" >Patient List</h3>
                {contents}
            </div>
        );
    }

    async createPatient(patient) {
        let response = await fetch('http://localhost:62177/api/patients', {
            method: 'POST',
            headers: {
                "Content-type": "application/json charset=utf-8"
            },
            body: JSON.stringify(patient),
        });
        await response.json();
        this.populatePatientList();
    }

    async populatePatientList() {
        const response = await fetch('http://localhost:62177/api/patients');
        const data = await response.json();
        this.setState({ patients: data, isLoaded: true });
    }

    validate() {

        let emailError = "";
        let mobileError = "";

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            emailError = "Invalid Email";
        }
        let mobilePattern = /^0[0-8]\d{8}$/g;
        if (!mobilePattern.test(this.state.mobile)) {
            mobileError = "Add valid mobile starting with 0"
        }
        if (emailError || mobileError) {
            this.setState({ emailError, mobileError });
            return false;
        }
        return true;
    }

    clearState() {
        this.setState({
            name: '',
            email: '',
            mobile: '',
            emailError: '',
            mobileError: ''
        });
    }
    
}