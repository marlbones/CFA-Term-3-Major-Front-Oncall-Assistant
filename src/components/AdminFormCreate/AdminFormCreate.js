import React, { Component } from 'react';
import axios from 'axios';
import './AdminFormCreate.css';
import { Input, Col, Row, Button } from 'react-materialize';

class AdminFormCreate extends Component {

  newClient() {
    const URL = 'https://oncallback.herokuapp.com/clients';
    axios.post(URL + '?name=' + this.nameInput.value
    + '&boat_id=' + this.boatInput.value
    + '&nationality=' + this.nationalityInput.value
    + '&ethnicity=' + this.ethnicityInput.value
    + '&language=' + this.languageInput.value
    + '&address=' + this.addressInput.value )
      .then((response) => {
        console.log(response);
        this.nameInput.value = '';
        this.boatInput.value = '';
        this.nationalityInput.value = '';
        this.ethnicityInput.value = '';
        this.languageInput.value = '';
        this.addressInput.value = '';
        this.props.getClients();
      })
      .catch(function (err) {
        console.log(err)
      });
  };

  render() {
    return (
      <div className="input-field">
        <h5>Add new client to the database</h5>
        <Row>
          <Col className="col m3 s6">
            <div className="inputDiv">
              <input type="text" ref={(input) => { this.nameInput = input; }} placeholder="Client Name" />
            </div>
          </Col>
          <Col className="col m3 s6">
            <div className="inputDiv">
              <input type="text" ref={(input) => { this.boatInput = input; }} placeholder="Boat Id" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col s12">
            <input type="text" ref={(input) => { this.ethnicityInput = input; }} placeholder="Ethnicity" />
          </Col>
        </Row>
        <Row>
          <Col className="col s6">
            <input type="text" ref={(input) => { this.nationalityInput = input; }} placeholder="Nationality" />
          </Col>
          <Col className="col s6">
            <input type="text" ref={(input) => { this.languageInput = input; }} placeholder="Language" />
          </Col>
        </Row>
        <Row>
          <Col className="col s12">
            <input type="text" ref={(input) => { this.addressInput = input; }} placeholder="Address" />
          </Col>
        </Row>
        <Button className="waves-effect waves-light appButton" onClick={() => this.newClient()}>Submit</Button>
      </div>
    )
  }
}

export default AdminFormCreate;
