import React, { Component } from 'react';
import './App.css';
import Clients from '../Clients/Clients';
import Callouts from '../Callouts/Callouts';
import OnCallGuide from '../OnCallGuide/OnCallGuide';
import DistressedCaller from '../DistressedCaller/DistressedCaller';
import ContactDirectory from '../ContactDirectory/ContactDirectory';
import axios from 'axios';
import { CardPanel, Row, Col, Modal, Button } from 'react-materialize';
var _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      callouts: [],
      now: new Date()
    }
  };

  componentDidMount() {
    this.getClients();
    this.getCallouts();
  }

  getClients () {
    const URL = 'http://oncallback.herokuapp.com/clients'
    axios.get(URL)
        .then((response) => {
          this.setState({ clients: response.data })
          console.log(this.state.clients)
        })
        .catch((error) => {
          console.log(error);
        });
  };

  getCallouts () {
    const URL = 'http://oncallback.herokuapp.com/callouts'
    axios.get(URL)
      .then((response) => {
        console.log(response.data)
        this.setState({callouts: _.sortBy(response.data, ["month", "day"]).reverse()})
      });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>On-Call Assistant</h4>
        </div>
        <br />
        <div className="flexbox">
          <Row>
            <Col className="col m6 s12 l4">
              <div className="cursorChange featureSelect">
                <Modal
                  trigger={
                    <CardPanel className="white lighten-4 black-text home-card">
                       <span>On-Call Guide</span>
                     </CardPanel>
                  }>
                  <OnCallGuide />
                </Modal>
              </div>
            </Col>
            <Col className="col m6 s12 l4">
              <div className="cursorChange featureSelect">
                <Modal
                  trigger={
                    <CardPanel className="white lighten-4 black-text home-card">
                       <span>Client Database</span>
                     </CardPanel>
                  }>
                  <Clients clients={this.state.clients} />
                </Modal>
              </div>
            </Col>
            <Col className="col m6 s12 l4">
              <div className="cursorChange featureSelect">
                <Modal
                  trigger={
                    <CardPanel className="white lighten-4 black-text home-card">
                       <span>Call Log</span>
                     </CardPanel>
                  }>
                  <Callouts callouts={this.state.callouts} getCallouts={() => this.getCallouts()} todayDate={this.state.now} />
                </Modal>
              </div>
            </Col>
            <Col className="col m6 s12 l4">
              <div className="cursorChange featureSelect">
                <Modal
                  trigger={
                    <CardPanel className="white lighten-4 black-text home-card">
                       <span>Distressed Caller Guide</span>
                     </CardPanel>
                  }>
                  <DistressedCaller />
                </Modal>
              </div>
            </Col>
            <Col className="col m6 s12 l4">
              <div className="cursorChange featureSelect">
                <Modal
                  trigger={
                    <CardPanel className="white lighten-4 black-text home-card">
                       <span>Contact Directory</span>
                     </CardPanel>
                  }>
                  <ContactDirectory />
                </Modal>
              </div>
            </Col>
            <Col className="col m6 s12 l4">
              <div className="cursorChange featureSelect">
                <Modal
                  trigger={
                    <CardPanel className="white lighten-4 black-text home-card">
                       <span>Admin</span>
                     </CardPanel>
                  }>
                  <p>Admin capabilities in development.</p>
                </Modal>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;

//For reference with images:
// import logo from './logo.svg';
{/* <img src={logo} className="App-logo" alt="logo" /> */}
