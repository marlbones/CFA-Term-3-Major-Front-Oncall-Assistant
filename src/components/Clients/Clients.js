import React, { Component } from 'react';
import './Clients.css';

class Clients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  };

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,
      20)});
  }

  render() {
    let filteredClients = this.props.clients.filter(
      (client) => {
        return client.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        client.address.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        client.boat_id.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div>
        <h5>Client Database</h5>
        {console.log(this.props.clients)}
        <input placeholder= "Search for clients" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <ul>
          {this.state.search === '' ? <li></li> : filteredClients.map((client, i) => <li key={i}><span className="bold">{client.name}:</span> <span className="bluetext">{client.boat_id}</span>
          <span className="bold"> -</span> {client.nationality} <span className="bold">-</span> <span className="bluetext">{client.ethnicity}</span>
          <span className="bold"> -</span> {client.language} <span className="bold">-</span> <span className="bluetext">{client.address}</span></li>
          )}
        </ul>
      </div>
    )
  }
}

export default Clients;
