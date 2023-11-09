const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, text, number }) => (
        <li key={id}>
          <p>
            {text}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
