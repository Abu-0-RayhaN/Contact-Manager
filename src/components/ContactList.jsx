import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const rendereContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });
  return <div>{rendereContactList}</div>;
};

export default ContactList;
