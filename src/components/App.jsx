import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import ContactList from './ContactItem/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'Test Test', number: '123-123' },
      { id: 'id-2', text: 'Test Test' },
    ],
    filter: '',
  };

  addContacts = (text, number) => {
    console.log(text);

    const contact = { id: nanoid(), text, number };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <section>
          <h1>Phonebook</h1>
          <Form contacts={contacts} onSubmit={this.addContacts} />
          <Filter filter={filter} />
          <ContactList contacts={contacts} />
        </section>
      </>
    );
  }
}

export default App;
