import React from 'react';
import SideNav from "../components/SideNav";
import { useState } from "react";
import axios, * as others from 'axios';

export default function Views() {

    const [viewList, getList] = useState([]);

    const viewAll = async () => {
        console.log('you cliked me');


        await axios.get("http://localhost:3001/loading").then((response) => {

            console.log('before');
            getList(response.data);
            console.log(response);

        });

    };
    return (

        <>
            <div className="flex">
                <div className="w-1/8">
                    <SideNav />
                </div>
                <div className="w-6/8">
                    <div className="">
                        <div className="pl-12   text-5xl font-bold">
                            <div className="flex">
                                <div className="w-1/2 text-center h-screen flex justify-center items-center">
                                    View Them
                                </div>
                                <div className="w-1/2 h-screen flex justify-center items-center">
                                    <div className="text-sm pt-0">
                                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">


                                            <div class="form-group mb-6">
                                                {viewList.map((val, key) => {
                                                    return (
                                                        <div className='text-black'>
                                                            <ul className='inline'>
                                                                <li>
                                                                    {val.email}
                                                                </li>
                                                                <li>
                                                                    {val.who}
                                                                </li>
                                                                <li>
                                                                    {val.message}
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    );
                                                })}

                                            </div>

                                            <div class="form-group mb-6">
                                                <button type="submit" class=" form-control block w-full px-3 py-1.5 text-base bg-green-400 padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Email Header"
                                                    onClick={viewAll} >Show All
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}