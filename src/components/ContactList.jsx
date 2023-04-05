import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const rendereContactList = props.contacts.map((contact) => {
    return (
      <div>
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        ></ContactCard>
      </div>
    );
  });
  return <div>{rendereContactList}</div>;
};

export default ContactList;
