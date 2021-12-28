import './App.css';
import Form from './components/form/Form';
import ContactList from './components/ContactList/ContactList';
import React, { Component } from 'react';
import shortid from 'shortid';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
export default Phonebook;
