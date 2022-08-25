import SearchForm from 'components/SearchForm';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <div className={s.wrapper}>
      <SearchForm onSubmit={onSubmit} />
    </div>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
