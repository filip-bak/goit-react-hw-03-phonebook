import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFormSubmit = (name, number) => {
    const id = nanoid(7);

    const newContact = {
      id,
      name,
      number,
    };

    // validation
    for (const contact of this.state.contacts) {
      if (contact.name === name) {
        return alert(`${name} is already in contacts.`);
      }
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = searchQuery => {
    this.setState(prevState => ({
      filter: searchQuery.toLowerCase(),
    }));
  };

  handleRemoveContact = itemName => {
    this.setState(prevState => ({
      contacts: this.state.contacts.filter(({ name }) => {
        return name !== itemName;
      }),
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <Section title="Phonebook">
          <ContactForm onFormSubmit={this.handleFormSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter onFilterChange={this.handleFilterChange} />
          <ContactList
            contacts={this.state.contacts}
            filterQuery={this.state.filter}
            onRemoveContact={this.handleRemoveContact}
          />
        </Section>
      </div>
    );
  }
}
