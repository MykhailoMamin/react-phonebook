const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
