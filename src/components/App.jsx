import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [{}],
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
      </>
    );
  }
}

export default App;
