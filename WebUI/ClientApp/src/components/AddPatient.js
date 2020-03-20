import React, { Component } from 'react';

export class AddPatient extends Component {
    constructor(props) {
        super(props);
        this.state = { isAddPatient: false };
        this.enableAddPatient = this.enableAddPatient.bind(this);
    }

    enableAddPatient() {
        this.setState({
            isAddPatient: true
        });
    }

    render() {
        let content = this.state.isAddPatient
            ? <div><p>Add Patient control</p></div>
            :<div><button className="btn btn-primary" onClick={this.enableAddPatient}>Add Patient</button></div>
        return (
            content
            );
    }
}

export default AddPatient;