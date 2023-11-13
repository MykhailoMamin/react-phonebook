import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteTodo }) => {
  return (
    <ul>
      {contacts.map(({ id, text, number }) => (
        <li key={id} className={css.contactsItem}>
          <p>
            {text}: {number}
          </p>
          <button
            type="button"
            className={css.contactsButton}
            onClick={() => onDeleteTodo(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
