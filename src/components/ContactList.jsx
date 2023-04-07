import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { NavLink } from "react-router-dom";
const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
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
            ref={inputEl}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={props.term}
            onChange={getSearchTerm}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="contain">
        {rendereContactList.length > 0 ? (
          rendereContactList
        ) : (
          <div className=" text-danger  h1 m-1">No Contacts To Show</div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
