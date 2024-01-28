

import React from 'react';

const NewsCard = ({news}) => {
    return (
        <>
            <div className="container mx-auto md:px-6">
                <section className="mb-10">
                    <h2 className="mb-1 pb-4 text-3xl font-bold capitalize">All News</h2>
                    <hr className=" bg-black h-[2px] mb-12 "/>
                    <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
                        {
                            news.map((item,id)=>(
                                <div key={id} className="mb-6 lg:mb-0 my-5">
                                    <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                        <div className="flex">
                                            <div
                                                className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                                data-te-ripple-init=""
                                                data-te-ripple-color="light"
                                            >
                                                <img
                                                    src={item['img2']}
                                                    className="w-full"
                                                />
                                                <a href={`/details?id=${item['id']}`}>
                                                    <div className="absolute top-0 left-0 bottom-0 right-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h5 className="mb-3 text-lg font-bold" title={item['title']} >{item['title'].slice(0,25)}</h5>
                                            <p className="mb-4 pb-2">
                                                {item['logn_des'].slice(0,100)}
                                            </p>
                                            <a
                                                href={`/details?id=${item?.id}`}
                                                className=" rounded-lg px-6 bg-gray-800 hover:bg-white hover:text-black border-2 border-transparent hover:border-gray-800 text-sm py-3 leading-10 capitalize text-white shadow-xl transition duration-150 ease-in-out"
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }

                    </div>
                </section>
                {/* Section: Design Block */}
            </div>

        </>

    );
};

export default NewsCard;
