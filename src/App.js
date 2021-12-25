import './App.css';
import Form from './components/form/Form';
import ContactList from './components/ContactList/ContactList';
import React, { Component } from 'react';
import shortid from 'shortid';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  addContact = name => {
    const newContact = {
      id: shortid.generate(),
      name,
    };

    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };
  formSubmitHendler = data => {
    console.log(data);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Form onSubmit={(this.formSubmitHendler, this.addContact)} />
        {this.state.contacts.length > 0 && <ContactList contacts={this.state.contacts} />}
      </>
    );
  }
}
export default Phonebook;
