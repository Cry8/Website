import React from "react";
import SideNav from "../components/SideNav";
import axios from "axios";
import { useQuery } from "react-query";

export default function Views() {

  const { data  } = useQuery(
    ["articles"],
    async () => await axios.get(`${process.env.REACT_APP_DB}/getAllPosts`)
  );

  if(data){console.log(data.data)}

  return (
    <>
      <div className="w-full">
        <SideNav />
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <div className="hidden md:block w-60 h-full "></div>
          <div className="flex-1 flex-wrap px-4">
            <div className=" flex-wrap  md:flex ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full mt-12">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Topic
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Tags
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Posted By
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Likes
                    </th>
                    <th scope="col" className="py-3 px-6">
                      DisLike
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Posted On
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Content
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data && 
                  data.data.map((datas) => (
                      
                    <tr
                      key={datas.id}
                      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {datas.topic}
                      </th>
                      <td className="py-4 px-6">{datas.tags}</td>
                      <td className="py-4 px-6">{datas.category}</td>
                      <td className="py-4 px-6">{datas.postedBy}</td>
                      <td className="py-4 px-6">{datas.likes}</td>
                      <td className="py-4 px-6">{datas.dislike}</td>
                      <td className="py-4 px-6">{datas.createdAt}</td>
                      <td className="py-4 px-6">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          {`View Content`}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
