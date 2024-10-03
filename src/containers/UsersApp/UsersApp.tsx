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
      emeil: "slava@gmail.com",
      active: true,
    },
    {
      id: "1",
      name: "Senya",
      emeil: "senya@gmail.com",
      active: true,
    },
  ]);
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <UserForm />
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
