import PropTypes from 'prop-types';
import { Component } from 'react';

import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleOnInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    console.log('this state', this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      filter: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit} className={css.form}>
        <label className={css.inputLabel}>
          <span className={css.label}> Name</span>
          <input
            onChange={this.handleOnInputChange}
            type="name"
            name="name"
            value={name}
            className={css.nameInput}
            required
          ></input>
        </label>
        <label className={css.inputLabel}>
          <span className={css.label}> Number</span>
          <input
            type="tel"
            name="number"
            onChange={this.handleOnInputChange}
            value={number}
            className={css.nameInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { ContactForm };