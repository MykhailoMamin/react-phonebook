import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';
import ContactList from './ContactItem/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', text: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', text: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', text: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', text: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContacts = (text, number) => {
    console.log(text);

    const contact = { id: nanoid(), text, number };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.text.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <section>
          <h1>Phonebook</h1>
          <Form contacts={contacts} onSubmit={this.addContacts} />
          <Filter value={filter} onChange={this.changeFilter} />
          <h2>Contacts</h2>
          <ContactList
            contacts={visibleContacts}
            onDeleteTodo={this.deleteContacts}
          />
        </section>
      </>
    );
  }
}

export default App;
