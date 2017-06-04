import React, { Component } from 'react';
import axios from 'axios';
import './CalloutsForm.css';

class CalloutsForm extends Component {
  
  newCallout() {
    const URL = 'https://oncallback.herokuapp.com/callouts';
    axios.post(URL + '?month=' + this.monthInput.value)
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
        <input type="text" ref={(input) => { this.monthInput = input; }} placeholder="Month" />
        <button onClick={() => this.newCallout()}>Submit</button>
      </div>
    )
  }
}

export default CalloutsForm;
