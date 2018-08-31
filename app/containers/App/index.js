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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: '',
      birth: 0,
      death: 0,
      summary: '',
      hoverSummary: '',
      hoverName: '',
      low: 0,
      high: 0,
    };

    axios
      .get('/data')
      .then(response => {
        response.data.sort((a,b) => { return a.birth - b.birth});
        let low = response.data[0];
        response.data.sort((a,b) => { return b.death - a.death});
        let high = response.data[0]
        this.setState({ list: response.data, low: low.birth, high: high.death});
      })
      .catch(error => {
        console.log(error);
      });
  }

  // handleSubmit = () => {
  //   axios
  //     .post('/data', {
  //       name: 'Fred',
  //       birth: 0,
  //       death: 1222,
  //       summary: 'testing',
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  handleHover = (summary, name) => {
    this.state.hoverSummary = summary;
    this.state.hoverName = name;
    this.forceUpdate();
  };

  handleHoverOff = () => {
    this.state.hoverSummary = '';
    this.state.hoverName = '';
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Input submitFn={this.handleSubmit} />
        <Timeline
          people={this.state.list}
          hoverFn={this.handleHover}
          hoverOffFn={this.handleHoverOff}
          currentSummary={this.state.hoverSummary}
          currentName={this.state.hoverName}
          low={this.low}
          high={this.high}
        />
      </div>
    );
  }
}
