import PropTypes from 'prop-types';
import { labelStyle, inputStyle } from './styles';

export const Filter = ({ filter, handleChange }) => (
    <label style={labelStyle}>
      Find contacts by name
      <input
        type="text" name="filter"
        value={filter}
        onChange={handleChange}
        style={inputStyle} />
    </label>
  );

  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };