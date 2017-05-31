import React, { Component } from 'react';
import './App.css';
import Clients from '../Clients/Clients';
import { CardPanel, Row, Col, Modal, Button } from 'react-materialize';

class App extends Component {
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
                header='Modal Header'
                trigger={
                  <CardPanel className="white lighten-4 black-text home-card">
                     <span>Client Database</span>
                   </CardPanel>
                }>
                <p>Testing out Modals</p>
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
