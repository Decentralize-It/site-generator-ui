import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      note: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;


    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // alert('Form was submitted ' + this.state.contactName + ' ' + this.state.contactEmail + ' ' + this.state.note)
    const { history } = this.props;
    history.push('/');
    event.preventDefault();
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">Name:</label>
            <input
              name="contactName"
              type="text"
              className="form-control"
              id="nameInput"
              value={this.state.contactName}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="nameInput">Email:</label>
            <input
              name="contactEmail"
              type="email"
              className="form-control"
              id="nameInput"
              value={this.state.contactEmail}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="note">Note:</label>
            <textarea
              name="note"
              className="form-control"
              id="note"
              value={this.state.note}
              onChange={this.handleInputChange} />
          </div>
          <input type="submit" class="btn btn-secondary btn-lg btn-block" value="Submit"/>
        </form>
      </div>

    )
  }
}

export default withRouter(ContactForm);
