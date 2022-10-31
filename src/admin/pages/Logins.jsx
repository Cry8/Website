import React from 'react';
import SideNav from "../components/SideNav";
import { useState } from "react"; 
import axios, * as others from 'axios';

export default function Logins() {

    const [username, setUser] = useState('');
    const [password, setPass] = useState('');

    const uploadLogin = () => {
        console.log(username + password);


        axios.post("http://localhost:3001/login", {
            username: username,
            password: password
        }).then(() => {
            console.log('updated successfully');
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
                                    Login
                                </div>
                                <div className="w-1/2 h-screen flex justify-center items-center">
                                    <div className="text-sm pt-0">
                                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md"> 
                                            <div class="form-group mb-6">
                                                <input type="text" class="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Username"
                                                    onChange={(e) => {
                                                        setUser(e.target.value);
                                                    }} />
                                            </div>

                                            <div class="form-group mb-6">
                                                <input type="text" class="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Password"
                                                    onChange={(e) => {
                                                        setPass(e.target.value);
                                                    }} />
                                            </div>

                                            <div class="form-group mb-6">
                                                <input type="submit" class="form-control block w-full px-3 py-1.5 text-base bg-green-400 padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Email Header"
                                                    onClick={uploadLogin} />
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