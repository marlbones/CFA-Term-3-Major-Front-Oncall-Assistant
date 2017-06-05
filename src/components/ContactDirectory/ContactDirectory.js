import React, { Component } from 'react';
import './ContactDirectory.css';
import { Modal } from 'react-materialize';

class ContactDirectory extends Component {
  render() {
    return (
      <div>
        <h5>Contact Directory</h5>
        <p className="bold">This section contains useful, state-based numbers. Select your state:</p>
      </div>
    )
  }
}

export default ContactDirectory;
