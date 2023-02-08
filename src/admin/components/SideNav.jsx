import React from "react";
import { links } from "./links";
import axios from "axios";
import { Link} from "react-router-dom";
import useAuth from "../contexts/useAuth";

export default function SideNav() {
  axios.defaults.withCredentials = true;
  const { username , role} = useAuth();

  const handleSignOut = () => {
    axios.get(`${process.env.REACT_APP_DB}/logout`).then((data) => {
      localStorage.clear();
      window.location.reload(true);
    });
  };

  return (
    <>
       
      <nav
        className="hidden md:block w-60 p-2 bg-cry8 fixed z-20 h-full" 
      >
        <div className="p-3 flex-wrap w-full">
          <ul>
            <li className="p-4 text-white  border-b font-bold">
              Welcome Back <span className="capitalize"> {username}</span>
            </li>

            {links.map((data) => (
              <li
                key={data.id}
                className="p-4 text-white border-b cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
              >
                <Link to={data.ref}>{data.title}</Link>
              </li>
            ))}

            <li className="p-4 text-white border-b cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
              <div onClick={() => handleSignOut()}>Logout</div>
            </li>
          </ul> 
        </div>
      </nav>
    </>
  );
}
