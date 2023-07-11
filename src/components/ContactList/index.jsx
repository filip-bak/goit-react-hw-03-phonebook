import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
  };

  handleRemoveContact = e => {
    const { onRemoveContact } = this.props;
    const { name } = e.currentTarget.dataset;

    onRemoveContact(name);
  };

  render() {
    const { contacts, filterQuery } = this.props;
    return (
      <ul className={styles.list}>
        {contacts
          .filter(contact => {
            return filterQuery === ''
              ? contact
              : contact.name.toLowerCase().includes(filterQuery);
          })
          .map(({ id, name, number }) => {
            return (
              <li className={styles.item} key={id}>
                <span className={styles.name}>{name}:</span>&nbsp;
                <span className={styles['phone-number']}>{number}</span>
                <button
                  className={styles.btn}
                  data-name={name}
                  onClick={this.handleRemoveContact}
                ></button>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ContactList;
