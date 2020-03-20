import React, { Component } from 'react';

export class Patient extends Component {

    render() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Patient Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.patients.map(patient =>
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>{patient.email}</td>
                            <td>{patient.mobile}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default Patient;