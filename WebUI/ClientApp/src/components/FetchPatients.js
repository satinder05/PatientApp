import React, { Component } from 'react';
import Patient from './Patient';
import AddPatient from './AddPatient';

export class FetchPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            patients: []
        };
    }

    componentDidMount() {
        this.populatePatientList();
    }

    render() {
        let contents = !this.state.isLoaded
            ? <p><em>Loading...</em></p>
            : <Patient patients={this.state.patients} />;

        return (
            <div>
                <h3 id="tabelLabel" >Patient List</h3>
                {contents}
                <div>
                    <AddPatient />
                </div>
            </div>
        );
    }
    async populatePatientList() {
        const response = await fetch('http://localhost:62177/api/patients');
        const data = await response.json();
        this.setState({ patients: data, isLoaded: true });

    }
}