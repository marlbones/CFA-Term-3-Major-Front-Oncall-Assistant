import React, { Component } from 'react';
import moment from 'moment';
import './Callouts.css';
import { Table, Input, Row, Col, Modal, Button } from 'react-materialize';
import CalloutsForm from '../CalloutsForm/CalloutsForm';
var _ = require('lodash');

class Callouts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonths: [],
    }
  };

  componentDidMount() {
    this.dater();
  };

  dater() {
    let todayDate = moment(this.props.todayDate).format('MMMM');
    let stringDate = String(todayDate)
    let dateArray = this.state.selectedMonths;
    dateArray.push(stringDate)
    this.setState({selectedMonths: dateArray})
  };

  handleCheckboxChange(event) {
    if(event.target.checked) {
      var array = this.state.selectedMonths
      array.push(event.target.value)
      console.log(array)
      this.setState({selectedMonths: array})
  } else {
      console.log(event.target.checked);
      var array = this.state.selectedMonths
      _.pull(array, event.target.value)
      this.setState({selectedMonths: array})
      console.log(this.state.selectedMonths)
  }
};

  render() {
    let filteredCallouts = this.props.callouts.filter(
      (callout) => {
        // return callout.month.indexOf(this.state.selectedMonths) !== -1;
        return _.indexOf(this.state.selectedMonths, callout.month) !== -1;
      },
    );

    return (
      <div>
        <h5 className="guideIntro">Call Logs</h5>
        <Row>
          <Col className="col s12 m6 callButton">
            <Modal
              trigger={
                <Button className="waves-effect waves-light appButton" waves='light'>Log New</Button>
              }>
              <CalloutsForm callouts={this.props.callouts} getCallouts={() => this.props.getCallouts()} />
            </Modal>
            <Modal
              bottomSheet
              trigger={
                <Button className="waves-effect waves-light appButton" waves='light'>Months</Button>
              }>
                <Row>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='checkbox' type='checkbox' value="January" label='January' onChange={this.handleCheckboxChange.bind(this)}/>
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='February' type='checkbox' label='February' value="February" onChange={this.handleCheckboxChange.bind(this)}/>
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='March' type='checkbox' value='March' label='March' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='April' type='checkbox' value='April' label='April' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='May' type='checkbox' value='May' label='May' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='June' type='checkbox' value='June' label='June' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                </Row>
                <Row>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='July' type='checkbox' value='July' label='July' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='August' type='checkbox' value='August' label='August' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='September' type='checkbox' value='September' label='September' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='October' type='checkbox' value='October' label='October' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='November' type='checkbox' value='November' label='November' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                  <Col className="col m2 s5">
                    <Input className="filled-in checkbox-red" name='December' type='checkbox' value='December' label='December' onChange={this.handleCheckboxChange.bind(this)} />
                  </Col>
                </Row>
            </Modal>
          </Col>
          <Col className="col s12 m3 callButton">

          </Col>
        </Row>
        <br />
        <Table className="responsive-table striped">
          <thead className="tableHead">
            <th>Date</th>
            <th>Caseworker</th>
            <th>Client Id</th>
            <th>Time</th>
            <th>Details</th>
            <th>Phone/Callout</th>
            <th>Length (mins)</th>
          </thead>
          <tbody>
            {filteredCallouts.map((callout, i) => <tr key={i}>
              <td>{callout.day} {callout.month} {callout.year}</td>
              <td>{callout.cw_name}</td>
              <td>{callout.client_id}</td>
              <td>{callout.time}</td>
              <td>{callout.details}</td>
              <td>{callout.call_phone}</td>
              <td>{callout.length}</td>
              </tr> )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Callouts;
