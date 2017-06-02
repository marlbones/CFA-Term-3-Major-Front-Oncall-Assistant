import React, { Component } from 'react';
import Moment from 'react-moment';
import './Callouts.css';
import { Table, Input, Row, Col } from 'react-materialize';

class Callouts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rabbit: []
    }
  };

  handleCheckboxChange(event) {
    if(event.target.checked) {
    var array = this.state.rabbit
    array.push(event.target.value)
    console.log(array)
    this.setState({rabbit: array})
  } else {
    console.log(event.target.checked);
    var array = this.state.rabbit
    array.splice(event.target.value)
    this.setState({rabbit: array})
    console.log(this.state.rabbit)
    // var index = this.state.rabbit.indexOf(event.target.value);
    // // this.setState({rabbit: this.state.rabbit.pop()})
    // console.log(index);
  }
};

showconsole(){
  console.log(this.state.rabbit);
}

  render() {
    return (
      <div>
        <h5>Call Logs</h5>
        <button onClick={this.showconsole.bind(this)}> Click Me! </button>
        <p>Select months to display:</p>
        <Row>
          <Col className="col s2">
            <Input name='checkbox' type='checkbox' value="January" label='January' onChange={this.handleCheckboxChange.bind(this)}/>
          </Col>
          <Col className="col s2">
            <Input name='February' type='checkbox' label='February' value="February" onChange={this.handleCheckboxChange.bind(this)}/>
          </Col>
          <Col className="col s2">
            <Input name='March' type='checkbox' label='March' />
          </Col>
          <Col className="col s2">
            <Input name='April' type='checkbox' label='April' />
          </Col>
          <Col className="col s2">
            <Input name='May' type='checkbox' label='May' />
          </Col>
          <Col className="col s2">
            <Input name='June' type='checkbox' label='June' />
          </Col>
        </Row>
        <Row>
          <Col className="col s2">
            <Input name='July' type='checkbox' label='July' />
          </Col>
          <Col className="col s2">
            <Input name='August' type='checkbox' label='August' />
          </Col>
          <Col className="col s2">
            <Input name='September' type='checkbox' label='September' />
          </Col>
          <Col className="col s2">
            <Input name='October' type='checkbox' label='October' />
          </Col>
          <Col className="col s2">
            <Input name='November' type='checkbox' label='November' />
          </Col>
          <Col className="col s2">
            <Input name='December' type='checkbox' label='December' />
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
            {this.props.callouts.map((callout, i) => <tr key={i}>
              <td><Moment format="DD/MM/YYYY">{callout.created_at}</Moment></td>
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
