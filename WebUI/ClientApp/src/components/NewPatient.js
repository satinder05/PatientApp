import React, { Component } from 'react';

class NewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        fetch('http://localhost:62177/api/patients', {
            method: 'POST',
            headers: {
                "Content-type": "application/json charset=utf-8"
            },
            body: JSON.stringify(this.state),
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Patient Name" onChange={this.handleChange} required />
                <input type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                <input type="text" name="mobile" placeholder="Mobile" onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NewPatient;