import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <ContactItem
              name={name}
              number={number}
              // onDeleteContact={onDeleteContact}
            />
            <button
              type="button"
              className={css.button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
export { ContactList };