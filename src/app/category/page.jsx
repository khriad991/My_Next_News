

import React from 'react';
import MainLayout from "@/components/main/MainLayout";
import NewsCard from "@/components/NewsCard";
const getData = async (catID) => {
    const news = (await (await fetch(`${process.env.HOST}/api/news/category?catID=${catID}`)).json())['data']
    const category = (await (await fetch(`${process.env.HOST}/api/category/find`)).json())['data']

    return { news,category};
};

const Page = async (props) => {
    let catID = props.searchParams["catID"];
    const data =await getData(catID)
    return (
        <MainLayout>
            <div className="container flex flex-col mt-10">
                <div className='w-full flex flex-col '>
                    {
                        data.category.map((cat,i)=>{
                            if(Number(catID) === Number(cat['id'])){
                                return(
                                    <h2 key={i}  className="mb-1 pb-4 text-2xl text-black font-semibold capitalize">
                                        <span className="font-bold text-blue-400 text-3xl">{cat['name']}</span>  News Here
                                    </h2>
                                )}})}
                    <hr className=" bg-black h-[2px] mb-12 "/>
                    <NewsCard news={data['news']} />
                </div>+
            </div>
        </MainLayout>
    );
};

export default Page;