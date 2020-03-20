import React, { Component } from 'react';
import Patient from './Patient';
import AddPatient from './AddPatient';

export class FetchPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            patients: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:62177/api/patients")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        patients: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        let contents = !this.state.isLoaded
            ? <p><em>Loading...</em></p>
            : <Patient patients={this.state.patients} />;
                
        return (
            <div>
                <div>
                    <AddPatient />
                </div>
                <h3 id="tabelLabel" >Patient List</h3>
                {contents}
            </div>
        );
    }
}