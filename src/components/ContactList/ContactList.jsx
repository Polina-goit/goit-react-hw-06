import Contact from "../Contact/Contact";

import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const contacts = [];
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact name={contact.name} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
