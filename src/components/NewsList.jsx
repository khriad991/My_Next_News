import { formatDistance } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

const NewsList = (props) => {

    return (
        // <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">

                        <div  className="rounded overflow-hidden shadow-lg" >
                            {/* <a href="#"></a> */}
                            <div className="relative">
                                <Link href='/'>
                                    <img

                                        className="w-full"
                                        // src={item["img1"]}
                                        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                        // width={1920}
                                        // height={1080}

                                        // alt={item["title"]}
                                    />
                                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                </Link>

                                <div className="absolute cursor-progress bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    {/*{item["name"]}*/}
                                </div>

                                <div className="text-sm cursor-wait absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
{/*                  <span className="font-bold">
                    {new Date(item["createdAt"]).getDate()}
                  </span>*/}
                                    {/*<small>*/}
                                    {/*    {new Date(item["createdAt"]).toLocaleString("default", {*/}
                                    {/*        month: "short",*/}
                                    {/*    })}*/}
                                    {/*</small>*/}
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <Link
                                    href={`/`}
                                    className="font-semibold text-lg mb-4 inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                                >
                                    item .title
                                </Link>
                                <p className="text-gray-500 text-sm">item .short_des lfajlalk gklagjklsajgl</p>
                            </div>
                            <div className="px-6 py-4 flex flex-row items-center">
                                 <span className="text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                    <FaClock className="mr-1" />
                          {/*          <span className="ml-1">
                                    {formatDistance(item["createdAt"], new Date(), {
                                         addSuffix: true,
                                        })}
                                     </span>*/}
                                 </span>
                            </div>
                        </div>

            </div>
        </div>
    );
};

export default NewsList;
