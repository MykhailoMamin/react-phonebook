import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import ContactList from './ContactItem/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'Test Test' },
      { id: 'id-2', text: 'Test Test' },
    ],
    name: '',
  };

  addContacts = text => {
    console.log(text);

    const contact = { id: nanoid(), text };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <Form contacts={this.state.contacts} onSubmit={this.addContacts} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
