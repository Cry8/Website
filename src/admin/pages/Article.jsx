import { useState } from "react";
import * as React from "react";
import axios from "axios";
import SideNav from "../components/SideNav";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import {  useQuery } from "react-query";
import Loader from "../components/Loader";
import useAuth from "../contexts/useAuth";

export default function Article() {
  axios.defaults.withCredentials = true;
  const { username } = useAuth();

  const navigate = useNavigate();

  const { isError, isLoading } = useQuery(
    ["users"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/me`)
  );

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [image, setImage] = useState([]);

  const [topic, setTopic] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [postedBy, setPostedBy] = useState(username);
  const [contents, setContents] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("");

  if (isError) {
    navigate("/sessionExpired");
  }
  if (isLoading) {
    return <Loader />;
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("topic", topic);
    formData.append("contents", contents);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("postedBy", postedBy);

    try {
      axios
        .post(`${process.env.REACT_APP_DB}/posts`, formData)
        .then((result) => {
          if (result.status === 200) {
            setSuccess(true);
            setStatus(result.data);
            setTimeout(() => {
              window.location.reload(true);
            }, 5000);
          } else {
            setError(true);
            setStatus(result.data);
          }
        });
    } catch (err) {
      console.log("errror uploading");
    }
  };

  return (
    <React.Fragment>
      <div className="w-full">
        <SideNav />
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="hidden md:block w-60 h-full "></div>
          <div className="flex-1 flex-wrap px-4">
            <div className=" flex-wrap  md:flex ">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12">
                <div className="text-3xl font-bold   text-center   flex   p-3">
                  Post Article
                </div>
                <div className=" flex  w-full pr-4">
                  <div className="w-full block p-6 rounded-lg shadow-lg bg-white ">
                    <form
                      className="text-sm w-full h-full"
                      encType="multipart/form-data"
                      onSubmit={onSubmit}
                      method="POST"
                    >
                      {error && (
                        <span className="text-center text-xl text-red-600 bold">
                          {status}
                        </span>
                      )}
                      {success && (
                        <span className="text-center text-xl text-green-600 bold">
                          Successfully Uploaded
                        </span>
                      )}

                      <div className="form-group mb-6">
                        <input
                          required={true}
                          type="file"
                          name="file"
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          placeholder="Name"
                        />
                      </div>

                      <div className="form-group mb-6">
                        <input
                          required={true}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="topic "
                          onChange={(e) => {
                            setTopic(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group mb-6 h-auto">
                        <ReactQuill
                          className="h-48"
                          required={true}
                          theme="snow"
                          value={contents}
                          onChange={setContents}
                        />
                      </div>

                      <div className="form-group pt-8 mb-6">
                        <input
                          required={true}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="category "
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group mb-6">
                        <input
                          required={true}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput7"
                          placeholder="tags "
                          onChange={(e) => {
                            setTags(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded   m-0  opacity-75 capitalize "
                          id="exampleInput7"
                          title="You cannot edit this"
                          placeholder={`Posted By: ${username}`}
                          disabled
                        />
                      </div>

                      <button
                        type="submit"
                        className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  uppercase  rounded shadow-md hover:bg-blue-700 hover:shadow-lg ocus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  transition duration-150 ease-in-out"
                        style={{ backgroundColor: "#042b56" }}
                      >
                        Post blog
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
