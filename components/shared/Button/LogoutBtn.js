import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

const LogoutBtn = () => {
  const router = useRouter()

const handleSubmit = () =>{
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("username");
    router.push("/");
}

  return (
    <button onClick={handleSubmit} className="btn-orange-light mx-3">
      <HiOutlineArrowRightOnRectangle size={20} /> Logout
    </button>
  );
};

export default LogoutBtn;
