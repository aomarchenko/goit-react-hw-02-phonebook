import './App.css';
import Form from './components/form/Form';

import React, { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHendler} />
      </>
    );
  }
}
export default Phonebook;
