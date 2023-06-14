import { ContactItem } from "./Contact";
import { Filter } from "components/Filter";
import PropTypes from 'prop-types';
import { listStyle } from "components/styles";

export const ContactList = ({ contacts, filter, handleChange, handleDelete }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={listStyle}>
      <h2>Contacts</h2>

      <Filter filter={filter} handleChange={handleChange} />

      {filteredContacts.length === 0 ? (
        <p>The contact list will be displayed here</p>
      ) : (
        <ul>
          {filteredContacts.map((contact, index) => (
          <ContactItem
          key={contact.id}
          contact={contact}
          handleDelete={() => handleDelete(contact.id)}
        />
          ))}
        </ul>
      )}
    </div>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
