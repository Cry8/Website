import React, { Fragment, useState, } from "react";
import SideNav from "../components/SideNav";
import axios from "axios";
import {  useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../contexts/useAuth";

export default function ProfileUpdate() {
  axios.defaults.withCredentials = true;
  const { username } = useAuth();

  const [errorPass, setErrorPass] = useState(false);
  const [successPass, setSuccessPass] = useState(false);
  const [errorAdd, setErrorAdd] = useState(false);
  const [successAdd, setSuccessAdd] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [successPhone, setSuccessPhone] = useState(false);
  const [status, setStatus] = useState("");

  const [medium, setMedium] = useState("");
  const [twitter, setTwitter] = useState("");
  const [facebook, setFacebook] = useState("");
  const navigate = useNavigate();
  const { isError, isLoading } = useQuery(
    ["users"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/me`)
  );
  if (isError) {
    navigate("/sessionExpired");
  }
  if (isLoading) {
    return <Loader />;
  }

  const resetTwitter = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/updateTwitter`, {
          username: username,
          twitter: twitter,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccessPass(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          } else {
            setErrorPass(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccessPass(false);
            setErrorPass(false);
          }, 5000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const resetMedium = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/updateMedium`, {
          username: username,
          medium: medium,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccessPhone(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          } else {
            setErrorPhone(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccessPhone(false);
            setErrorPhone(false);
          }, 5000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const resetFacebook = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/updateFacebook`, {
          username: username,
          facebook: facebook,
        })
        .then(async (result) => {
          if (result.status === 200) {
            setSuccessAdd(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          } else {
            setErrorAdd(true);
            setStatus(result.data);
          }

          setTimeout(() => {
            setStatus("");
            setSuccessAdd(false);
            setErrorAdd(false);
          }, 5000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div className="w-full">
        <SideNav />
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="hidden md:block w-60 h-full"></div>
          <div className="flex-1 flex-wrap px-4">
           
            <div className=" flex-wrap  md:flex  justify-around">
              <form onSubmit={resetTwitter} className="pt-8 md:pt-3">
                <div className="text-3xl font-bold w-full pb-4">
                  Change Twitter
                </div>
                {errorPass && (
                  <span className="text-center text-red-600 bold">
                    {status}
                  </span>
                )}
                {successPass && (
                  <span className="text-center text-xl text-green-600 bold">
                    {status}
                  </span>
                )}
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="password"
                    className="inline-block mb-1 font-medium"
                  >
                    Twitter address
                  </label>
                  <input
                    placeholder="https://twitter.com...."
                    required
                    onChange={(e) => setTwitter(e.target.value)}
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="text"
                    name="text"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
                  >
                    Update my Twitter address
                  </button>
                </div>
              </form>

              <form onSubmit={resetMedium} className="pt-8 md:pt-3">
                <div className="text-3xl font-bold w-full pb-4">
                  Change Medium
                </div>
                {errorPhone && (
                  <span className="text-center text-red-600 bold">
                    {status}
                  </span>
                )}
                {successPhone && (
                  <span className="text-center text-xl text-green-600 bold">
                    {status}
                  </span>
                )}
                <div className="mb-1 sm:mb-2">
                  <label
                    htmlFor="text"
                    className="inline-block mb-1 font-medium"
                  >
                    Medium
                  </label>
                  <input
                     placeholder="https://medium.com...."
                    required
                    type="text"
                    onChange={(e) => setMedium(e.target.value)}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="phone"
                    name="phone"
                  />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
                  >
                    Update Medium address                  </button>
                </div>
              </form>

              <form onSubmit={resetFacebook} className="pt-8 md:pt-3">
                <div className="text-3xl font-bold w-full pb-4">Address</div>

                <div className="mb-1 sm:mb-2">
                  {errorAdd && (
                    <span className="text-center text-red-600 bold">
                      {status}
                    </span>
                  )}
                  {successAdd && (
                    <span className="text-center text-xl text-green-600 bold">
                      {status}
                    </span>
                  )}
                  <label
                    htmlFor="address"
                    className="inline-block mb-1 font-medium"
                  >
                    Facebook
                  </label>
                  <input
                    placeholder="https://facebook.com...."
                    required
                    type="text"
                    onChange={(e) => setFacebook(e.target.value)}
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="address"
                    name="address"
                  />
                </div>

                <div className="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
                  >
                    Change my facebook Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
