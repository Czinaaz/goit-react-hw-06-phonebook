import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/contactsSlice';
import { selectFilter } from '../../redux/Contacts/selector';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const getSearchContacts = () => {
    return contacts.filter( name =>
      name.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {getSearchContacts()?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button className={css.buttons} type="button" onClick={() => handlerDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};