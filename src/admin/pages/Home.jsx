import axios from "axios";
import * as React from "react";
import {  useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import {  useQuery } from "react-query";
import Loader from "../components/Loader";

export default function Home() {

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const {  isError, isLoading } = useQuery(
    ["users"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/me`)
  );
  if (isError) {
    navigate("/session-expired");
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="w-full">
        <SideNav />
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="hidden md:block w-60 h-full "></div>
          <div className="flex-1 flex-wrap px-4">
            <div className="w-full  flex h-screen flex-wrap justify-center items-center overflow-x-auto   shadow-md sm:rounded-lg mt-12">
              <div>
                <div className="font-bold text-xl pb-3 text-center text-3xl">Welcome!.</div>
                <div className="text-xl pt-2 text-center">
                  Click any of the navigation on the left to make an actions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
