import { IUser } from "../../types";

interface Props {
  dish: IUser;
}

const UserItem: React.FC<Props> = ({ dish }) => {
 

  return (
    <div className="card mb-2 p-3">
      <div className="row" justify-content-between>
        <div className="col-6">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text"> {dish.emeil} </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
