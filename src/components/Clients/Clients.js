import React, { Component } from 'react';
import './Clients.css';

class Clients extends Component {
  render() {
    return (
      <div>
        <h5>Client Database</h5>
        {console.log(this.props.clients)}
      </div>
    )
  }
}

export default Clients;
