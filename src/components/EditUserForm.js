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
    if (!user.name || !user.username || !user.email) return;
    props.updateUser(user.id, user);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="form-input">
        <div>
          <label>Name</label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-input">
        <div>
          <label>Username</label>
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-input">
        <div>
          <label>E-Mail</label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
};

export default AddUserForm;
