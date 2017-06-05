import React, { Component } from 'react';
import './DistressedCaller.css';
import { Modal, Button, Row, Col, CardPanel } from 'react-materialize';

class DistressedCaller extends Component {
  render() {
    return (
      <div>
        <h5>Distressed or suicidal caller guide</h5>
          <p className="bold">1. Acknowledge the caller's distress</p>
          <p>Remember to ask for consent before making enquiries on their behalf <span className="bold">unless</span> there is a risk of self-harm or harm to others.</p>
          <p className="bold">2. Is the caller at an immediate risk of harm? Do they have a plan to carry out threat?</p>
          <Row>
            <Col className="col s6">
              <Modal
                trigger={
                  <Button waves='light'>No immediate threat of harm</Button>
                }>
                <p className="bold">Encourage engagement in these forms of support:</p>
                <CardPanel>
                  <p className="bold">Red Cross</p>
                  <p>Information of services or referral.</p>
                </CardPanel>
                <CardPanel>
                  <p className="bold">Counseling</p>
                  <p><span className="bold">Mental Health Emergency Line - </span>1300 555 788</p>
                  <p><span className="bold">Lifeline - </span>13 11 14</p>
                  <p><span className="bold">Samaritans - </span>9381 5555, 1800 198 313</p>
                  <p><span className="bold">Salvo Care Line  - </span>9442 5777</p>
                </CardPanel>
                <CardPanel>
                  <p className="bold">Informal Supports</p>
                  <p>Explore and encourage engagement with family, friends, religious connections.</p>
                  <p>If appropriate and given consent, contact or inform family members. </p>
                </CardPanel>
                <CardPanel>
                  <p className="bold">Safety Plan</p>
                  <p>Create a safety plan with client and agree to follow.</p>
                </CardPanel>
              </Modal>
            </Col>
            <Col className="col s6">
              <Modal
                trigger={
                  <Button waves='light'>Immediate threat of harm</Button>
                }>
                <p className="bold">If immediate risk of self-harm or harm to others, contact:</p>
                <p><span className="bold">Police - </span>000</p>
                <p><span className="bold">Ambulance - </span>000</p>
                <p><span className="bold">Mental Health Emergency Response Team - </span>1300 555 788 | 1800 676 822</p>
              </Modal>
            </Col>
          </Row>
          <p className="bold">3. Inform Department of Immigration as per On-Call guide</p>
      </div>
    )
  }
}

export default DistressedCaller;
