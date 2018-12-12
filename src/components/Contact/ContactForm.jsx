
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
    const { contactName, contactEmail, note } = this.state;
    const { handleInputChange } = this;
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
              value={contactName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label id="emailInputLabel" htmlFor="emailInput">Email:
            </label>
            <input
              name="contactEmail"
              type="email"
              className="form-control"
              id="emailInput"
              value={contactEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="note">Note:</label>
            <textarea
              name="note"
              className="form-control"
              id="note"
              value={note}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-secondary btn-lg btn-block"
            value="Submit"
          />
        </form>
      </div>

    );
  }
}

export default withRouter(ContactForm);
