import { IUser } from "../../types";
import UserItem from "./UserItem";

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  
  return (
    <div>
      {users.map((dish) => (
        <UserItem key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Users;
