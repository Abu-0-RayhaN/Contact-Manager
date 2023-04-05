import React from "react";
const ContactCard = (props) => {
  const { name, email, id } = props.contact;
  console.log(id);
  return (
    <div>
      <div className="item d-flex mt-3">
        <div className="content ">
          <i className="fa fa-user" aria-hidden="true"></i>
          <h1 className="h1">{name}</h1>
          <h6 className="h6">{email}</h6>
        </div>
        <div className="ms-auto">
          <i
            className="fas fa-trash"
            style={{ color: "red", marginTop: "7px" }}
            onClick={() => props.clickHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
