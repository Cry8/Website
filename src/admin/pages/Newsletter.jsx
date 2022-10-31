import React from 'react';
import SideNav from "../components/SideNav";
import { useState } from "react";
import axios, * as others from 'axios'; 

export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [who, setForm] = useState('');
    const [message, SetMessage] = useState('');

    const upload = async () => {

        console.log(email + who + message);

       await axios.post("http://localhost:3001/form", {
            email:email,
            who:who,
            message:message
        }).then(() => {
            
            // console.log('updated successfully');
            let info = document.getElementById('done');
            info.innerHTML = "donce";
            info.style.color = "green";
            info.style.font = "bold";
        });

       
    };


    return (
        <>
            <div className="flex">
                <div className="w-1/8">
                    <SideNav />
                </div>
                <div className="w-6/8"> <div id="done" className='ml-4'></div>
                    <div className="">
                        <div className="pl-12   text-5xl font-bold">
                            <div className="flex">
                                <div id=' ' className="w-1/2 text-center h-screen flex justify-center items-center">
                                    Newsletter
                                </div>
                                <div className="w-1/2 h-screen flex justify-center items-center">
                                    <div className="text-sm pt-0">
                                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md"> 
                                                <div class="form-group mb-6">
                                                    <input type="text" value={email} class="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Email Header"
                                                        onChange={(e) => {
                                                            setEmail(e.target.value);
                                                        }} />
                                                </div>

                                                <div class="form-group mb-6">
                                                    <input type="text" value={who} class="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="From:"
                                                        onChange={(e) => {
                                                            setForm(e.target.value);
                                                        }} />
                                                </div>

                                                just Paste the entire content in the box below
                                                <div class="form-group mb-6">
                                                    <textarea value={message} class="form-control block w-full px-3 py-1.5 text-base padding border border-solid border-gray-300 rounded  transition  ease-in-out  m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="12"
                                                        placeholder="Message"
                                                        onChange={(e) => {
                                                            SetMessage(e.target.value);
                                                        }} ></textarea>
                                                </div>

                                                <button onClick={upload} type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  uppercase  rounded shadow-md hover:bg-blue-700 hover:shadow-lg ocus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg  transition duration-150 ease-in-out" style={{ backgroundColor: '#042b56' }}>Send Newsletter</button>
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