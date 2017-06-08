import React, { Component } from 'react';
import './Admin.css';
import { Row, Col, Modal, Button } from 'react-materialize';
import AdminFormCreate from '../AdminFormCreate/AdminFormCreate';
import AdminUpdateClient from '../AdminUpdateClient/AdminUpdateClient';

class Admin extends Component {
  render() {
    return (
      <div>
        <h5 className="guideIntro">Admin Page</h5>
        <Row>
          <Col className="col s12 m3 callButton">
            <Modal
              trigger={
                <Button className="waves-effect waves-light appButton" waves='light'>Add Client</Button>
              }>
              <AdminFormCreate getClients={() => this.props.getClients()} />
            </Modal>
          </Col>
          <Col className="col s12 m3 callButton">
            <Modal
              trigger={
                <Button className="waves-effect waves-light appButton" waves='light'>Edit Clients</Button>
              }>
              <AdminUpdateClient clients={this.props.clients} getClients={() => this.props.getClients()} />
            </Modal>
          </Col>
          <Col className="col s12 m5 callButton">
            <Button className="waves-effect waves-light appButton" waves='light'>Add Contacts</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Admin;
