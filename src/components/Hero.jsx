'use client'
import Link from "next/link";

const Hero = ({news}) => {

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-8/12 ">
                    <div className="container mx-auto h-full sm:p-10">
                        <div className=" px-4 lg:flex items-center h-full lg:mt-0">
                            <div className="w-full">
                                <h1 className="text-4xl lg:text-6xl font-bold">
                                    {news[0]["title"]}
                                </h1>
                                <div className="w-20 h-2 bg-green-600 my-4" />
                                <p className="text-xl mb-8">
                                    {news[0]["logn_des"].slice(0,300)}
                                </p>
                                <Link href={`/details?id=${news[0]['id']}`} className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={news[0]['img3']}
                    alt="Leafs"
                    className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
                />
            </div>

        </>

    );
};

export default Hero;