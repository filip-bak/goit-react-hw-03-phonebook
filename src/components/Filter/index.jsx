import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './Filter.module.css';

export class Filter extends Component {
  static propTypes = {
    onFilterChange: PropTypes.func,
  };

  handleChange = e => {
    const { onFilterChange } = this.props;
    const filterValue = e.target.value;
    onFilterChange(filterValue);
  };

  render() {
    return (
      <div>
        <label className={styles.label}>
          Find contacts by name
          <input
            className={styles.input}
            type="text"
            name="filter"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
