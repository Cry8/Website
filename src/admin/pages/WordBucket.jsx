import { useState } from "react";
import axios from "axios";
import SideNav from "../components/SideNav";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function WordBucket() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [wordPhrase, setWordPhrase] = useState("");
  const [contents, setContents] = useState("");
  const [status, setStatus] = useState("");

  axios.defaults.withCredentials = true;
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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${process.env.REACT_APP_DB}/bucket`, {
          wordPhrase: wordPhrase,
          contents: contents,
        })
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
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full">
        <SideNav />
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="hidden md:block w-60 h-full "></div>
          <div className="flex-1 flex-wrap px-4">
            <div className=" flex-wrap  md:flex ">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12">
                <div className="text-3xl font-bold   text-center   flex   p-3">
                  Post Word Bucket Dictionary
                </div>
                <div className=" flex  w-full pr-4">
                  <div className="w-full block p-6 rounded-lg shadow-lg bg-white ">
                    <form onSubmit={onSubmit}>
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
                          type="text"
                          onChange={(e) => {
                            setWordPhrase(e.target.value);
                          }}
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          required={true}
                          placeholder="Input the wordPhrase"
                        />
                      </div>

                      <div className="form-group mb-6">
                        <textarea
                          className="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          required={true}
                          value={contents}
                          onChange={(e) => {
                            setContents(e.target.value);
                          }}
                          rows="4"
                          cols="50"
                        >
                          Start typing...
                        </textarea>
                      </div>

                      <input
                        type="submit"
                        className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  uppercase  rounded shadow-md hover:bg-blue-700 hover:shadow-lg ocus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  transition duration-150 ease-in-out cursor-pointer"
                        value="Upload Dictionary"
                        style={{ backgroundColor: "#042b56" }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
