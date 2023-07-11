import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onFormSubmit } = this.props;
    const { name, number } = this.state;

    onFormSubmit(name, number);

    this.setState(prevState => ({
      ...prevState,
      name: '',
      number: '',
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
              title="Name may contain only letters, spaces. For example Adrian, Jacob Mercer, Charles De Batz De Castelmore Artagnan"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              autoComplete="off"
              placeholder="Name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
            <span className={styles.status}></span>
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
              title="Phone number must be digits and can contain spaces, dashes and can start with +"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              autoComplete="off"
              placeholder="Number"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
            <span className={styles.status}></span>
          </label>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
