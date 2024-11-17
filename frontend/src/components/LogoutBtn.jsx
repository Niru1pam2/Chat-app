import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "../hooks/useLogout";

function LogoutBtn() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      <IoIosLogOut
        className="h-6 w-6 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
}

export default LogoutBtn;
