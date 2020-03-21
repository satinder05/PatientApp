import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { FetchPatients } from './components/FetchPatients';
import { PatientHome } from './components/PatientHome';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/fetch-patients' component={FetchPatients} />
            <Route path='/patient-home' component={PatientHome} />
      </Layout>
    );
  }
}