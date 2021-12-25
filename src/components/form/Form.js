import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };
  nameInputId = shortid.generate();
  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({
      contacts: [],
      name: '',
    });
  };
  // addContact = event => {
  //   // event.preventDefault();

  //   this.setState({
  //     contacts: [{ id: '1', name: '' }],
  //   });
  // };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Имя
            <input
              id={this.nameInputId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
