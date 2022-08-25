import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import { FaSearch } from 'react-icons/fa';

class SearchForm extends Component {
  state = { value: '' };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <button className={s.btn} type="submit" onSubmit={this.handleSubmit}>
          <FaSearch className={s.btnLabel} size={30}></FaSearch>
          <span>Search</span>
        </button>

        <input
          type="text"
          name="query"
          value={this.state.value}
          onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
