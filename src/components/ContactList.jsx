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
      <div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div>{rendereContactList}</div>
    </div>
  );
};

export default ContactList;
