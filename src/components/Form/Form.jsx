import React, { Component } from 'react';
import css from './Form.module.css';

class Form extends Component {
  state = {
    massage: '',
    number: '', // Додали властивість number до стану компонента
  };

  handleChange = e => {
    this.setState({ massage: e.currentTarget.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // Ви маєте можливість використовувати як massage, так і number у функції onSubmit
    this.props.onSubmit(this.state.massage, this.state.number);

    this.setState({ massage: '', number: '' });
  };

  render() {
    const { massage, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={css.input}
            type="text"
            value={massage}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            value={number}
            onChange={this.handleNumberChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
