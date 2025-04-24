import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 bg-pink-100">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="w-20 lg:w-28 cursor-pointer"
        />
      </Link>
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>Xin chào ! {user ?  user.fullName : 'học viên'}</p>
        {user ? <UserButton /> : <image className="max-w-8" src={assets.profile_img} />}

      </div>
    </div>
  );
};

export default Navbar;
