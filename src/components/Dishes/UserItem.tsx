import { IUser } from "../../types";

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({ user }) => {
 

  return (
    <div className="card mb-2 p-3">
      <div className="row" justify-content-between>
        <div className="col-6">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text"> {user.email} </p>
        </div>
        <div className="col-6 text-end">
          <span className="badge bg-secondary">{user.role}</span>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="">Activity </label>
          <p>
            <label>
              <input
                type="radio"
                name="active"
                value="online"
              />
              Online
            </label>
            <label>
              <input
                type="radio"
                name="active"
                value="offline"
              />
              Offline
              
            </label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
