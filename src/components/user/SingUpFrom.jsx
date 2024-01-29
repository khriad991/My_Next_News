import React from 'react';
import Link from "next/link";

const SingUpFrom = () => {
    return (
        <>
            <section className="background-radial-gradient mb-40 overflow-hidden ">
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n  "
                    }}
                />

                <div className="container px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
                    <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
                        <div className="grid items-center gap-12  lg:grid-cols-2">
                            <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
                                <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                                    The best offer <br />
                                    <span className="text-[hsl(218,81%,75%)]">for your business</span>
                                </h1>
                                <p className="opacity-70 text-[hsl(218,81%,85%)]">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                    dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                    ab ipsum nisi dolorem modi. Quos?
                                </p>
                            </div>
                            <div className="relative mb-12 lg:mb-0 ">
                                <div
                                    id="radius-shape-1"
                                    className="absolute rounded-full shadow-lg"
                                />
                                <div id="radius-shape-2" className="absolute shadow-lg" />
                                <div className="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 md:px-12 py-14">
                                    <h1 className='text-3xl font-extrabold text-center text-blue-400 mb-6'>Registered Here </h1>
                                    <form >

                                        <div className="relative mb-6" data-te-input-wrapper-init="">
                                            <input
                                                type="text"
                                                className="peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] pb-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-[1.5px] border-gold-200 border-gray-600 "
                                                id="exampleFormControlInput1"
                                                placeholder="First name"
                                            />
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            >
                                                First name
                                            </label>
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init="">
                                            <input
                                                type="text"
                                                className="peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] pb-2 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-[1.5px] border-gold-200 border-gray-600 "
                                                id="exampleFormControlInput15"
                                                placeholder="Phone Number"
                                            />
                                            <label
                                                htmlFor="exampleFormControlInput5"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            >
                                              Phone Number
                                            </label>
                                        </div>
                                        <div className="relative mb-6" >
                                            <input
                                                type="email"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-[1.5px] border-gold-200 border-gray-600"
                                                id="exampleFormControlInput3"
                                                placeholder="Email address"
                                            />
                                            <label
                                                htmlFor="exampleFormControlInput3"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            >
                                                Email address
                                            </label>
                                        </div>
                                        <div className="relative mb-6" >
                                            <input
                                                type="password"
                                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-b-[1.5px] border-gold-200 border-gray-600"
                                                id="exampleFormControlInput4"
                                                placeholder="Password"
                                            />
                                            <label
                                                htmlFor="exampleFormControlInput4"
                                                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                            >
                                                Password
                                            </label>
                                        </div>
                                        <div className='flex flex-col gap-y-4 mb-6'>
                                            <button
                                                type="button"
                                                className=" bg-blue-300 hover:bg-blue-200 px-5 py-3 w-full border-1 outline-none border-blue-300
                                              hover:text-gray-900 tracking-[4px] hover:tracking-[2px]  text-black font-bold capitalize rounded-xl  transition-all duration-300 ">
                                                Sign up
                                            </button>

                                            <p className='text-black text-base text-center'>
                                                Dont have an account? Go to <Link className="text-blue-500 font-medium capitalize" href='/user/login'>Login here</Link>
                                            </p>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    );
};

export default SingUpFrom;