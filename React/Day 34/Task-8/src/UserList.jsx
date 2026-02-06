import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Deepan", email: "deepan@gmail.com", role: "Developer" },
    { id: 2, name: "Arun", email: "arun@gmail.com", role: "Designer" }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // ➕ Add User
  const addUser = () => {
    if (!name || !email || !role) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
      role
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setRole("");
  };

  // ❌ Delete User
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">User Management</h3>

      {/* Add User Form */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Add User</h5>

          <div className="row g-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Role"
                value={role}
                onChange={e => setRole(e.target.value)}
              />
            </div>

            <div className="col-md-1 d-grid">
              <button className="btn btn-primary" onClick={addUser}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User Cards */}
      <div className="row">
        {users.map(user => (
          <div className="col-md-4 mb-3" key={user.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{user.name}</h5>
                <p className="mb-1">{user.email}</p>
                <span className="badge bg-success me-2">{user.role}</span>

                <button
                  className="btn btn-sm btn-danger float-end"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {users.length === 0 && (
          <p className="text-center text-muted">No users available</p>
        )}
      </div>
    </div>
  );
}

export default UserList;
