

import React from 'react';
import MainLayout from "@/components/main/MainLayout";
import NewsCard from "@/components/NewsCard";
const getData = async (keyword) => {
    const news = (await (await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`)).json())['data']
    const category = (await (await fetch(`${process.env.HOST}/api/category/find`)).json())['data']

    return { news,category};
};

const Page = async (props) => {
    let keyword = props.searchParams["keyword"];
    const data =await getData(keyword)
    return (
        <MainLayout>
            <div className="container flex flex-col mt-20">
                <div className='w-full flex flex-col '>
                    <h2  className="mb-1 pb-4 text-2xl text-black font-semibold capitalize">
                         <span className="font-bold text-blue-400 text-3xl">{keyword}</span> Keyword News Here
                    </h2>
                    <hr className=" bg-black h-[2px] mb-12 "/>
                    <NewsCard news={data['news']} />
                </div>+
            </div>
        </MainLayout>
    );
};

export default Page;