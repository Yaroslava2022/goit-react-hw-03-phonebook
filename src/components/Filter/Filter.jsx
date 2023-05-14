import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = ({ value, onChange }) => (
  <>
    <label className={css.inputLabel}>
      <span className={css.label}>Find contacts by name</span>
      <input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        className={css.filterInput}
      ></input>
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export { Filter };