import React from "react";
import { Link, NavLink } from "react-router-dom";
const ContactCard = (props) => {
  const onclickHandler = () => {
    if (window.confirm(`You Want To Delete ${name}'s Contact?`)) {
      props.clickHandler(props.contact.id);
    }
  };
  const { name, email, id } = props.contact;
  return (
    <div>
      <div className="item d-flex mt-3">
        <div className="content ">
          <i className="fa fa-user" aria-hidden="true"></i>
          <h1 className="h1">{name}</h1>
          <NavLink
            to={{
              pathname: `/contact/${id}`,
              state: {
                contact: props.contact,
              },
            }}
          >
            <h6 className="h6">{email}</h6>
          </NavLink>
        </div>
        <div className="ms-auto">
          <i
            className="fas fa-trash"
            style={{ color: "red", margin: "20px" }}
            onClick={onclickHandler}
          ></i>

          <Link
            to={{ pathname: `/edit/${id}`, state: { contact: props.contact } }}
          >
            <i
              className="fas fa-edit"
              style={{ color: "red", marginTop: "7px" }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
