import React, { Component } from 'react';
import './AdminUpdateClient.css';
import axios from 'axios';
import { Button } from 'react-materialize';

class AdminUpdateClient extends Component {

  deleteAction(client, id) {
  const URL = 'https://oncallback.herokuapp.com/clients/';
  const clientRemove = URL + id
  axios.delete(clientRemove)
    .then((response) => {
    console.log(response)
    this.props.getClients();
  })
  .catch(function (error) {
    console.log(error);
  });
};

  render() {
    return (
      <div>
        <h5>Select a client to edit or delete</h5>
        <ul>
          {this.props.clients.map((client, i) => <li key={i}><span className="bold">{client.name}:</span> <span className="bluetext">{client.boat_id}</span>
          <span className="bold"> -</span> {client.nationality} <span className="bold">-</span> <span className="bluetext">{client.ethnicity}</span>
          <span className="bold"> -</span> {client.language} <span className="bold">-</span> <span className="bluetext">{client.address} </span>
          <br /><Button className="appButton" onClick={() => this.deleteAction(client.name, client._id)}> Delete </Button> <Button className="appButton"> Edit </Button></li>
          )}
        </ul>
      </div>
    )
  }
}

export default AdminUpdateClient;
