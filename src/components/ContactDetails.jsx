import React from "react";
// import { Link } from 'react-router-dom'
import user from "../images/user.png";
import { Link } from "react-router-dom";
const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="container card ">
      <div className="card-image">
        <img src={user} alt="" />
      </div>
      <div className="card-body">
        <div className="h2">{name}</div>
        <div className="description">{email}</div>
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-info btn mx-auto">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
