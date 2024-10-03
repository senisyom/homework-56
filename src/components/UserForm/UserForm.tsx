import { ChangeEvent, useState } from "react";
import { IUserMutation } from "../../types";

const UserForm = () => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
  });

  const changeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setNewUser(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
    }
  })
  }

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault
  }

  return (
    <form onSubmit={addNewUser}>
      <div className="form-group mb-2">
        <label htmlFor="name">User: </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={newUser.name}
          onChange={changeUser}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          id="email"
          className="form-control"
          value={newUser.email}
          onChange={changeUser}
        ></input>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="urlImage">Activity </label>
        <p>
          <label>
            <input type="radio" name="myRadio" value="option1" />
            Online
          </label>
          <label>
            <input type="radio" name="myRadio" value="option2" />
            Offline
          </label>
        </p>
      </div>
      <div className="form-group mb-2">
        <label>Choose a role:</label>
        <select name="pets" id="pet-select">
          <option value=""> Please choose an option </option>
          <option value="dog">User</option>
          <option value="cat">Administrator</option>
          <option value="cat">Editor</option>
        </select>
      </div>

      <button className="btn btn-primary"> Add</button>
    </form>
  );
};

export default UserForm;
