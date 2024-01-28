"use client";


import SubmitButton from "@/Utility/SubmitButton";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import {ErrorToast, IsEmail, SuccessToast} from "@/Utility/FromHelper";

const Subscribe = () => {
    const [data, setData] = useState({ email: "" });
    const [submit, setSubmit] = useState(false);
    const inputChange = (name, value) => {
        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };
    const fromSubmit = async () => {
        if (IsEmail(data.email)) {
            ErrorToast("Valid Email Address Required");
        } else {
            setSubmit(true);
            const options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            };
            let res = await fetch("/api/subscribe", options);
            let resJson = await res.json();
            setSubmit(false);
            setData({ email: "" });
            if (resJson["status"] === "success") {
                SuccessToast("Request Success");
            } else {
                ErrorToast("Request Failed");
            }
        }
    };

    return (

        <div className="py-10 -mt-9 bg-blue-50 ">
            <div className="container py-10">
                <div className="px-6 py-4  flex justify-center items-center flex-col ">
                    <p className=" text-2xl text-center mb-8 capitalize font-bold ">
                        Subscribe the newsletter For our latest updates ,news & offers.
                    </p>
                    <Toaster />
                    <div className="w-8/12 flex justify-center  items-center flex-col relative">
                        <input
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={(e) => {
                                inputChange("email", e.target.value);
                            }}
                            className=" py-3.5 w-full transition duration-500 ease-in-out  border-2 outline-none border-blue-200 focus:border-blue-500 px-4 rounded-lg placeholder:text-gray-800 focus:bg-indigo-50"
                            placeholder="Write Your Email"
                        />
                        <SubmitButton
                            onClick={fromSubmit}
                            submit={submit}
                            className=" 4  rounded bg-gray-800 py-3 px-6 hover:bg-blue-100 hover:text-gray-900 text-white font-bold uppercase  transition duration-500 ease-in-out absolute top-1 right-[5px]"
                            text="Subscribe "
                        />
                    </div>
                </div>
            </div>
        </div>







    );
};

export default Subscribe;
