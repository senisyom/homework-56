import { IUser } from "../../types";
import UserItem from "./UserItem";

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
