import React, { Component } from 'react';
import './ContactDirectory.css';
import { Modal, Row, Col, CardPanel } from 'react-materialize';

class ContactDirectory extends Component {
  render() {
    return (
      <div>
        <h5>Contact Directory</h5>
        <p className="bold">This section contains useful, state-specific service numbers. Select your state:</p>
        <Row>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                  <p>ACT</p>
                </CardPanel>
              }>
              <p className="bold">ACT service directory</p>
              <CardPanel>
                <p className="bold">Child Protection</p>
                <p>Child Protection - 1300 556 729</p>
              </CardPanel>
              <CardPanel>
                <p className="bold">Mental Health Services</p>
                <p>Lifeline - 13 11 14 - Available 24 hours a day, seven days per week. Telephone Crisis Support volunteers provide skilled and knowledgeable support to callers when in crisis.</p>
                <p>ACT Crisis Assessment and Treatment Team - 1800 629 354 or 6205 1065 - 24-hour, seven day a week service used for assessment and treatment of mentally ill people in crisis situations.</p>
              </CardPanel>
              <CardPanel>
                <p className="bold">Women's Refuge</p>
                <p>Domestic Violence Crisis Centre - 6280 0900 - 24h Crisis Hotline. DVCS supports all people affected by domestic/family violence. Domestic Violence Crisis Service provides a variety of services from crisis intervention to community education.</p>
                <p>Beryl Women's Refuge - 6288 1622 - Provides crisis accommodation for women with children escaping domestic violence.</p>
              </CardPanel>
            </Modal>
          </Col>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                   <p>NSW</p>
                 </CardPanel>
              }>
              <p className="bold">NSW service directory</p>
              <CardPanel>
                <p className="bold">Child Protection</p>
                <p>Mandatory Reporting - 133 627 (13 DOCS)</p>
              </CardPanel>
              <CardPanel>
                <p className="bold">Mental Health Services</p>
                <p>Lifeline - 13 11 14 - Available 24 hours a day, seven days per week. Telephone Crisis Support
                  volunteers provide skilled and knowledgeable support to callers when in crisis.</p>
                <p>Mental Health Access Line - 1800 011 511 - provides 24 hour mental health connection and
                  referral services and is staffed by mental health professionals.</p>
              </CardPanel>
              <CardPanel>
                <p className="bold">Youth Refuges</p>
                <p>The Girls Refuge - 9564 3638 - has seven beds - six for girls and young women (13-17 yr olds)
                  to stay up to three months and one crisis bed for overnight stays.</p>
                <p>Taldumande Young people’s accommodation - 0414 308 533 - For 12- 18 year olds (male & female).
                  There are six beds for stays up to three months, plus one crisis bed for stays up to seven days.
                  $55 per week (includes all food, rent, bills, toiletries, sheets, blankets, towels, clothing and books).</p>
              </CardPanel>
              <CardPanel>
                <p className="bold">Homelessness</p>
                <p>Link 2 Home - 1800 152 152 - Mostly for people who are permanent residents or
                  citizens or for clients experiencing domestic violence</p>
              </CardPanel>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                   <p>QLD</p>
                 </CardPanel>
              }>
              <p>QLD directoy coming soon.</p>
            </Modal>
          </Col>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                   <p>SA</p>
                 </CardPanel>
              }>
              <p>SA directoy coming soon.</p>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                   <p>TAS</p>
                 </CardPanel>
              }>
              <p>TAS directoy coming soon.</p>
            </Modal>
          </Col>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                   <p>VIC</p>
                 </CardPanel>
              }>
              <p>VIC directoy coming soon.</p>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col className="col s6">
            <Modal
              trigger={
                <CardPanel>
                   <p>WA</p>
                 </CardPanel>
              }>
              <p>WA directoy coming soon.</p>
            </Modal>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ContactDirectory;
