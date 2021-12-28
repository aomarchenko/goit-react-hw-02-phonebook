import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputChangeName = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleInputChangeNumber = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({
      contacts: [],
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              id={this.nameInputId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              id={this.numberInputId}
              value={this.state.number}
              onChange={this.handleInputChangeNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
