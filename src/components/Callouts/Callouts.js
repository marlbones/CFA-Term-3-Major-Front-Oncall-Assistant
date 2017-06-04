import React, { Component } from 'react';
import moment from 'moment';
import './Callouts.css';
import { Table, Input, Row, Col } from 'react-materialize';
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
        <h5>Call Logs</h5>
        <p>Log phonecall or callout</p>
        <CalloutsForm callouts={this.props.callouts} getCallouts={() => this.props.getCallouts()} />
        <p>Select months to display:</p>
        <Row>
          <Col className="col s2">
            <Input name='checkbox' type='checkbox' value="January" label='January' onChange={this.handleCheckboxChange.bind(this)}/>
          </Col>
          <Col className="col s2">
            <Input name='February' type='checkbox' label='February' value="February" onChange={this.handleCheckboxChange.bind(this)}/>
          </Col>
          <Col className="col s2">
            <Input name='March' type='checkbox' value='March' label='March' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='April' type='checkbox' value='April' label='April' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='May' type='checkbox' value='May' label='May' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='June' type='checkbox' value='June' label='June' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col className="col s2">
            <Input name='July' type='checkbox' value='July' label='July' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='August' type='checkbox' value='August' label='August' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='September' type='checkbox' value='September' label='September' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='October' type='checkbox' value='October' label='October' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='November' type='checkbox' value='November' label='November' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
          <Col className="col s2">
            <Input name='December' type='checkbox' value='December' label='December' onChange={this.handleCheckboxChange.bind(this)} />
          </Col>
        </Row>
        <Table>
          <thead>
            <th>Date</th>
            <th>Caseworker</th>
            <th>Client Id</th>
            <th>Time</th>
            <th>Details</th>
            <th>Phone Call or Callout</th>
            <th>Length (minutes)</th>
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
