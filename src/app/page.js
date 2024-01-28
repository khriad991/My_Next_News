
import MainLayout from "@/components/main/MainLayout";

import Slider from "@/components/main/Slider";
import NewsCard from "@/components/NewsCard";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import React from "react";
const getData =async () => {
    const slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=slider`)).json())['data']
    const popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=popular`)).json())['data']
    const latest = (await (await fetch(`${process.env.HOST}/api/news/type?type=latest`)).json())['data']
    const feature  = (await (await fetch(`${process.env.HOST}/api/news/type?type=featured`)).json())['data']
    const news = (await (await fetch(`${process.env.HOST}/api/news/all`)).json())['data']
    return {slider,news,popular ,latest,feature}
}



export default async function page(props) {
    const  data = await getData()
    const  AllNewsList = (await getData()).news

  return (
    <MainLayout>
        <div className="flex flex-col justify-start gap-y-10">
            <div className="container mt-20 flex flex-col ">
                <Hero news={AllNewsList}/>
                <div className='w-full flex flex-col '>
                    <h2 className="mb-1 pb-4 text-3xl font-bold capitalize">latest news</h2>
                    <hr className=" bg-black h-[2px] mb-12 "/>
                    <NewsCard  news={data['latest']}/>
                </div>
                <div className='w-full flex flex-col '>
                    <h2 className="mb-1 pb-4 text-3xl font-bold capitalize">popular news</h2>
                    <hr className=" bg-black h-[2px] mb-12 "/>
                    <NewsCard  news={data['popular']} />
                </div>
                <div className='w-full flex flex-col '>
                    <h2 className="mb-1 pb-4 text-3xl font-bold capitalize">featured news</h2>
                    <hr className=" bg-black h-[2px] mb-12 "/>

                    <NewsCard  news={data['feature']} />
                </div>
            </div>
            <Slider slider={data.slider} />
            <div className="container">
                <Subscribe />
            </div>
        </div>

    </MainLayout>
  );
}
