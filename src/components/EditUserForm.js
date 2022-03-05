import { useState, useEffect } from "react";

const AddUserForm = (props) => {
  const [user, setUser] = useState(props.currUser);

  useEffect(() => {
    setUser(props.currUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!user.name || !user.username) return;
    props.updateUser(user.id, user);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="w3-button">Update user</button>
      <button className="w3-button" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default AddUserForm;
