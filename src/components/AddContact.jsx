import React, { Component } from "react";

export default class AddContact extends Component {
  render() {
    return (
      <div className="">
        <h2>Add Contact</h2>
        <form action="" className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}
