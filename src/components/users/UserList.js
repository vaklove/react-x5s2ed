import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import AddUser from './AddUser';
import Button from 'react-bootstrap/Button';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState(undefined);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleUserEdit = (id) => {
    setIsEdit(!isEdit);
    setEditUser(users.find((u) => u.id === id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  };

  const onAdd = async (name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };
  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    const user = users.find((u) => u.id == evt.target.id.value);
    user.name = evt.target.name.value;
    user.email = evt.target.email.value;
    onEdit(evt.target.id.value, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  const onEdit = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatedUsers = users.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
          }

          return user;
        });

        setUsers((users) => updatedUsers);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = users.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };

  return (
    <div>
      <h1>Users </h1>
      <AddUser onAdd={onAdd} />
      <br />
      <hr />
      <input
        icon="search"
        placeholder="Search user..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <br />
      {isEdit && editUser ? (
        <form onSubmit={handleOnEditSubmit}>
          <input
            placeholder="Id"
            name="id"
            value={editUser.id}
            style={{ display: 'none' }}
          />
          <input placeholder="Name" name="name" defaultValue={editUser.name} />
          <input
            placeholder="Email"
            name="email"
            defaultValue={editUser.email}
          />
          <button onSubmit={handleOnEditSubmit}>Save</button>
          <Button onClick={handleEdit}>Cancel</Button>
        </form>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          

            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button onClick={() => handleUserEdit(user.id)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => onDelete(user.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserList;
