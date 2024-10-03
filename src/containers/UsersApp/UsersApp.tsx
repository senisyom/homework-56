import UserForm from "../../components/UserForm/UserForm";
import ToolBar from "../../components/ToolBar/ToolBar";
import Users from "../../components/Dishes/Users";
import { useState } from "react";
import { IUser } from "../../types";

const Plovo = () => {

  const [users, setUsers] = useState<IUser[]>([
    {
       id: "1",
      name: "Slava",
      email: "slava@gmail.com", 
      active: true,
      role: "User", 
    },
    {
      id: "2", 
      name: "Senya",
      email: "senya@gmail.com", 
      active: true,
      role: "Administrator", 
    },
  
  ]);

  const addNewUser = (newUser: IUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  }
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <UserForm addNewUser={addNewUser} />
          </div>
          <div className="col-4 mb-2">
            <Users users={users} />
          </div>
          <div className="col-4 mb-2"></div>
        </div>
      </main>
    </>
  );
};

export default Plovo;
