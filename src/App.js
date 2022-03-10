import { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Marc", username: "marcmarmelade", email: "marc@email.com" },
    { id: 2, name: "Alex", username: "alexander3", email: "alex@email.com" },
    { id: 3, name: "Maxi", username: "maximax", email: "maxi@email.com" },
    { id: 4, name: "Lucy", username: "lucybaby", email: "lucy@email.com" },
    { id: 5, name: "Stan", username: "stanmarsh", email: "stan@email.com" },
    { id: 6, name: "Odil", username: "odilkolumb", email: "odil@email.com" },
  ];
  const initialFormState = { id: null, name: "", username: "", email: "" };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currUser, setCurrUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrUser({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <section>
        {editing ? (
          <>
            <h1>edit user</h1>
            <EditUserForm
              setEditing={setEditing}
              currUser={currUser}
              updateUser={updateUser}
            />
          </>
        ) : (
          <>
            <h1>add user</h1>
            <AddUserForm addUser={addUser} />
          </>
        )}
      </section>
      <section>
        <h1>view users</h1>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </section>
    </div>
  );
};

export default App;
