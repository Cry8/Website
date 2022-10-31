import React from 'react';
import { links } from './links'
import axios   from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function SideNav() {
  const navigate = useNavigate()

 const handleSignOut =  () => {
      axios.get("http://localhost:5001/logout").then((data) => {
      localStorage.clear()
      window.location.reload(true);
    }
  )
}

  return (
    <>
      <nav className="w-56 p-2 bg-cry8 " style={{ height: '100vh' }}>
        <div className="">
          <ul>
            <li className="p-4 text-white border-b font-extrabold">
              Welcome Back Boss
            </li>

            {links.map((data) => (
              <li
                key={data.id}
                className="p-4 text-white border-b cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
              >
                <Link to={data.ref}>
                  {data.title}</Link>
              </li>
            ))}

              <li className="p-4 text-white border-b cursor-pointer  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110"
              > 
                <div onClick={() => handleSignOut() }>
                  Logout
                </div>
              </li>
           
          </ul>
        </div>
      </nav>
    </>
  )
}
