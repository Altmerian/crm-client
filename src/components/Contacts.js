import React, { Component } from 'react';
import SingleContact from './SingleContact'
import AddContacts from './AddContacts'


export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/contacts")
      .then(response => response.json())
      .then(result => this.setState({ contacts: result._embedded.contacts }))
      .catch(error => {
        console.log('error', error);
        this.getMockContacts();
      });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <AddContacts />
        </div>
        <div className='row'>
          {this.state.contacts.map((item) => (
            <SingleContact key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
  }

  getMockContacts() {
    this.setState({
      contacts: [
        {
          "firstName": "Pavel",
          "lastName": "Shakhlovich",
          "email": "pavel@myEmail.com",
        },
        {
          "firstName": "Emmanuel",
          "lastName": "Henri",
          "email": "emmanuel@myEmail.com",
        },
        {
          "firstName": "Pedro",
          "lastName": "Rodrigues",
          "email": "pedro@myEmail.com",
        },
        {
          "firstName": "Kim",
          "lastName": "Lee",
          "email": "kim@myEmail.com",
        },
      ]
    });
  }
}