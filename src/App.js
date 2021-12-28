import './App.css';
import Form from './components/form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import React, { Component } from 'react';
import shortid from 'shortid';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <Form onSubmit={this.addContact} />
        <ContactList contacts={filteredContacts} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
      </>
    );
  }
}
export default Phonebook;
