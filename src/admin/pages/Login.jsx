import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  axios.defaults.withCredentials = true;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState();

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/login`, {
          username: username,
          password: password,
        })
        .then((result) => {
          if (result.status === 200) {
            setSuccess(true);
            setStatus(result.data.data);
            console.log(result.data);
            dispatch({ type: "LOGIN", payload: username });
            setTimeout(() => {
              navigate("/dashboard");
            }, 3000);
          } else {
            setError(true);
            setStatus(result.data);
          }
          setTimeout(() => {
            setStatus("");
            setSuccess(false);
            setError(false);
          }, 10000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div className=" bg-cry8 h-screen  flex justify-center items-center p-24">
      <div className="bg-white p-8 rounded-xl">
        <div className="text-4xl text-center text-black">
          <Link to="/article"> Cry8 Login </Link>
        </div>

        <div className="mt-4">
          <div className="flex justify-center ">
            {error && (
              <span className="text-center text-red-600 bold">{status}</span>
            )}
            {success && (
              <span className="text-center text-xl text-green-600 bold">
                {status}
              </span>
            )}
          </div>
          <form onSubmit={onSubmit} className="px-8 pt-6 pb-2 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between"></div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                //   required={true}
                placeholder="Username"
              />
            </div>

            <div className="mb-4">
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                //   required={true}
                placeholder="Password"
              />
            </div>

            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-black/[0.90] rounded-xl hover:bg-[#042b56] focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Go to dashboard
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <span className="inline-block text-sm  align-baseline text-black">
                Forgotten Password? Contact the developer.
              </span>
            </div>

            <div className="text-center pt-4">
              <Link to="/register">
                <span className="inline-block cursor-pointer font-bold text-base  align-baseline text-[#042b56]">
                  Register
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
