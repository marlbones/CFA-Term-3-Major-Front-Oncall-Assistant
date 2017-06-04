import React, { Component } from 'react';
import axios from 'axios';
import './CalloutsForm.css';
import { Input } from 'react-materialize';

class CalloutsForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    monthSelected: 'January'
  };
  this.handleSelected = this.handleSelected.bind(this);
}

  handleSelected(e) {
  this.setState({ monthSelected: e.target.value });
}

  newCallout() {
    const URL = 'https://oncallback.herokuapp.com/callouts';
    axios.post(URL + '?month=' + this.state.monthSelected)
      .then((response) => {
        console.log(response);
        this.monthInput = '';
      })
      .catch(function (err) {
        console.log(err)
      });
  };

  render() {
    return (
      <div>
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
        <button onClick={() => this.newCallout()}>Submit</button>
      </div>
    )
  }
}

export default CalloutsForm;
