import React from "react";
import ContactCard from "./ContactCard";
import { NavLink } from "react-router-dom";
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
  return (
    <div>
      <h2 className="text-center">Contact List</h2>
      <NavLink
        to={{
          pathname: "/add",
          state: {
            AddContactHandler: props.AddContactHandler,
          },
        }}
      >
        <button className="btn btn-primary float-end"> Add Contact</button>
      </NavLink>
      <br />
      <br />
      {rendereContactList}
    </div>
  );
};

export default ContactList;
