import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SideNav from "../components/SideNav";


export default function Home() {
    return (
        <>
            <div className="flex">
                <div className="w-1/8">
                    <SideNav />
                </div>
                <div className="w-6/8">
                    <div className="h-screen flex justify-center items-center">
                        <div className="pl-12 text-center text-5xl font-bold">
                            Welcome!.
                            <div className="text-xl pt-2">
                                Click any of the navigation on the left to make an actions
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};