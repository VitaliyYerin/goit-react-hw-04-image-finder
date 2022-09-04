import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter what images you want !');
      return;
    }
    onSubmit(query);
  };


    return (
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.btn} type="submit" onSubmit={handleSubmit}>
          <FaSearch size={30}></FaSearch>
          <span className={s.btnLabel}>Search</span>
        </button>

        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
