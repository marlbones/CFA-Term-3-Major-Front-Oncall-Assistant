import React, { Component } from 'react';
import axios from 'axios';
import './CalloutsForm.css';
import { Input, Col, Row, Button } from 'react-materialize';

class CalloutsForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    monthSelected: 'January',
    callSelected: 'Phonecall'
  };
  this.handleSelected = this.handleSelected.bind(this);
  this.handleCallSelected = this.handleCallSelected.bind(this);
}

  handleSelected(e) {
  this.setState({ monthSelected: e.target.value });
}
  handleCallSelected(e) {
  this.setState({ callSelected: e.target.value });
  }

  newCallout() {
    const URL = 'https://oncallback.herokuapp.com/callouts';
    axios.post(URL + '?day=' + this.dayInput.value
    + '&month=' + this.state.monthSelected
    + '&year=' + this.yearInput.value
    + '&cw_name=' + this.cwName.value
    + '&client_id=' + this.clientId.value
    + '&time=' + this.timeInput.value
    + '&details=' + this.detailsInput.value
    + '&call_phone=' + this.state.callSelected
    + '&length=' + this.lengthInput.value )
      .then((response) => {
        console.log(response);
        this.yearInput.value = '';
        this.dayInput.value = '';
        this.cwName.value = '';
        this.clientId.value = '';
        this.timeInput.value = '';
        this.detailsInput.value = '';
        this.lengthInput.value = '';
        this.props.getCallouts();
      })
      .catch(function (err) {
        console.log(err)
      });
  };

  render() {
    return (
      <div className="input-field">
        <h5>Add new phone/callout log</h5>
        <Row>
          <Col className="col m3 s4">
            <div className="inputDiv">
              <input type="text" ref={(input) => { this.dayInput = input; }} placeholder="Day" />
            </div>
          </Col>
          <Col className="col m4 s8">
            <Input type="select" onChange={this.handleSelected} placeholder="Month">
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </Input>
          </Col>
          <Col className="col m3 s12">
            <div className="inputDiv">
              <input type="text" ref={(input) => { this.yearInput = input; }} placeholder="Year" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col s12">
            <input type="text" ref={(input) => { this.cwName = input; }} placeholder="Caseworker" />
          </Col>
        </Row>
        <Row>
          <Col className="col s6">
            <input type="text" ref={(input) => { this.clientId = input; }} placeholder="Client ID" />
          </Col>
          <Col className="col s6">
            <input type="text" ref={(input) => { this.timeInput = input; }} placeholder="Time of Call" />
          </Col>
        </Row>
        <Row>
          <Col className="col s12">
            <input type="text" ref={(input) => { this.detailsInput = input; }} placeholder="Details" />
          </Col>
        </Row>
        <Row>
          <Col className="col m3 s8">
            <Input type="select" onChange={this.handleCallSelected} placeholder="Callout or Phonecall">
              <option value='Phonecall'>Phonecall</option>
              <option value='Callout'>Callout</option>
            </Input>
          </Col>
          <Col className="col m6 s4">
            <div className="inputDiv">
              <input type="text" ref={(input) => { this.lengthInput = input; }} placeholder="Length of callout (minutes)" />
            </div>
          </Col>
        </Row>
        <Button className="waves-effect waves-light appButton" onClick={() => this.newCallout()}>Submit</Button>
      </div>
    )
  }
}

export default CalloutsForm;
