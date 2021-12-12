import React, { Component } from "react";


export default class AddContacts extends Component {

  submitContact(event) {
    event.preventDefault();

    let contact = {
      firstName: event.target.elements[0].value,
      lastName: event.target.elements[1].value,
      email: event.target.elements[2].value,
    }

    var raw = JSON.stringify(contact);

    var requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/api/contacts", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    window.location.reload();
  }



  render() {

    const buttonStyle = {
      display: "flex",
      justifyContent: "center",
    };

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submitContact.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input name="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input name="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input name="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row" style={buttonStyle}>
            <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}