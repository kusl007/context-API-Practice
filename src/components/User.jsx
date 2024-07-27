import React, { useContext } from "react";
import UserDetails from "./UserDetails";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1 className="text-3xl">User List</h1>
      {user.map((item) => (
        <div key={item.id} className="w-full mt-10 ">
          <Link to={`/user/${item.id}`} className="bg-blue-100 p-3">
            {item.name}
          </Link>
        </div>
      ))}
        <div className="mt-10">
      <Outlet />
      </div>
    </div>
  );
};

export default User;
