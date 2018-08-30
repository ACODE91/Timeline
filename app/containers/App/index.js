/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import Timeline from 'components/Timeline';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: '',
      birth: 0,
      death: 0,
      summary: '',
    };

    axios
      .get('/data')
      .then(response => {
        console.log(response);
        this.setState({ list: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit = () => {
    axios
      .post('/data', {
        name: 'Fred',
        birth: 0,
        death: 1222,
        summary: 'testing',
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <AppWrapper>
        <div>
          <Input submitFn={this.handleSubmit} />
          <Timeline people={this.state.list}/>
        </div>
      </AppWrapper>
    );
  }
}
