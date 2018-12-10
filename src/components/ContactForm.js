import React, { Component } from 'react';
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      note: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: ''
    })
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="nameInput">Name:</label>
          <input
            name="contactName"
            type="text"
            className="form-control"
            id="nameInput"
            value={this.state.contactName}
            onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label for="nameInput">Email:</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="nameInput"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label for="note">Note:</label>
          <textarea
            name="note"
            className="form-control"
            id="note"
            value={this.state.note}
            onChange={this.handleInputChange}>
            </textarea>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit"/>
      </form>

    )
  }
}
