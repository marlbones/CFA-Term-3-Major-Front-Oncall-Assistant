import React, { Component } from 'react';
import './App.css';
import Clients from '../Clients/Clients';
import axios from 'axios';
import { CardPanel, Row, Col, Modal, Button } from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    }
  };

  componentDidMount() {
    this.getClients();
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>On-Call Assistant</h4>
        </div>
        <br />
        <Row>
          <Col className="col s4">
            <div className="example">
              <Modal
                header='Modal Header'
                trigger={
                  <CardPanel className="white lighten-4 black-text home-card">
                     <span>On-Call Steps</span>
                   </CardPanel>
                }>
                <p>Testing out Modals</p>
              </Modal>
            </div>
          </Col>
          <Col className="col s4">
            <div className="example">
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
          <Col className="col s4">
            <div className="example">
              <Modal
                header='Modal Header'
                trigger={
                  <CardPanel className="white lighten-4 black-text home-card">
                     <span>Call Log</span>
                   </CardPanel>
                }>
                <p>Testing out Modals</p>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

//For reference with images:
// import logo from './logo.svg';
{/* <img src={logo} className="App-logo" alt="logo" /> */}
