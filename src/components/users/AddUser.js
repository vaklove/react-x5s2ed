import React, { useState, useEffect } from 'react';

function AddUser({ onAdd }) {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.name.value, evt.target.email.value);
    evt.target.name.value = '';
    evt.target.email.value = '';
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="row">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />

        <button onSubmit={handleOnSubmit}>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
