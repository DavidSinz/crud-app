import { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "", email: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (!user.name || !user.username || !user.email) return;
    props.addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="form-input">
        <div><label>Name</label></div>
        <div><input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        /></div>
      </div>
      <div className="form-input">
        <div><label>Username</label></div>
        <div><input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        /></div>
      </div>
      <div className="form-input">
        <div><label>E-Mail</label></div>
        <div><input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        /></div>
      </div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
