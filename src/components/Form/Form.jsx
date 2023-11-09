import { Component } from 'react';

class Form extends Component {
  state = {
    massage: '',
  };

  handleChange = e => {
    this.setState({ massage: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.massage);

    this.setState({ massage: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.massage}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default Form;
