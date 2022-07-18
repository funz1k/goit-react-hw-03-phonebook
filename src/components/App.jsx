import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from "components/ContactsForm/ContactsForm";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <ContactsForm onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map(elem => (<li key={elem.id}>{elem.name}:{elem.number}</li>))}
          </ul>
        </div>
      </div>
    );
  }
}
