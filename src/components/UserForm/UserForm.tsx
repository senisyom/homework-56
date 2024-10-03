import { ChangeEvent, useState } from "react";
import { IUser, IUserMutation } from "../../types";

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    active: true,
    role: "",
  });

  const changeUser = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setNewUser((prevState) => ({
        ...prevState,
        active: value === "true",
      }));
    } else if (type === "select-one") {
      setNewUser((prevState) => ({
        ...prevState,
        role: value,
      }));
    } else {
      setNewUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUser.name.trim().length === 0 || newUser.email.trim().length === 0) {
      alert("Заполните все поля");
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: "",
        email: "",
        active: true,
        role: "",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="name">User: </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={newUser.name}
          onChange={changeUser}
          required
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={newUser.email}
          onChange={changeUser}
          required
        ></input>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="">Activity </label>
        <p>
          <label>
            <input
              type="radio"
              name="active"
              value="true"
              checked={newUser.active === true}
              onChange={changeUser}
            />
            Online
          </label>
          <label>
            <input
              type="radio"
              name="active"
              value="false"
              checked={newUser.active === false}
              onChange={changeUser}
            />
            Offline
          </label>
        </p>
      </div>
      <div className="form-group mb-2">
        <label>Choose a role:</label>
        <select name="role" id="role-select" value={newUser.role} onChange={changeUser}>
          <option value=""> Please choose an option </option>
          <option value="">User</option>
          <option value="">Administrator</option>
          <option value="">Editor</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        {" "}
        Add
      </button>
    </form>
  );
};

export default UserForm;
