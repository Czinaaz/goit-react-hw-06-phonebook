import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/Contacts/selector';
import { setFilter } from '../../redux/Contacts/filterSlice';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handlerFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find user by name
      <input className={css.input}
        type="text"
        name="name"
        value={filter}
        onChange={handlerFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};

