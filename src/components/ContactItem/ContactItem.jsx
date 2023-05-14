import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
const ContactItem = ({ name, number }) => {
  return (
    <div className={css.contactItem}>
      <p className={css.contactName}> {`${name}:`}</p>{' '}
      <p className={css.contactNumber}> {number}</p>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export { ContactItem };