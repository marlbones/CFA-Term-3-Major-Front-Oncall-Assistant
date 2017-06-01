import React, { Component } from 'react';
import './Callouts.css';

class Callouts extends Component {
  render() {
    return (
      <div>
        <h5>Call Logs</h5>
        <ul>
          {this.props.callouts.map((callout, i) => <li key={i}>{callout.created_at} | {callout.cw_name} | {callout.client_id} | {callout.time} | {callout.details} | {callout.call_phone} | {callout.length}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Callouts;
