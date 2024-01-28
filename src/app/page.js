
import MainLayout from "@/components/main/MainLayout";

import Slider from "@/components/main/Slider";
import NewsCard from "@/components/NewsCard";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
const getData =async () => {
    const slider = (await (await fetch(`${process.env.HOST}/api/news/type?type=slider`)).json())['data']
    const news = (await (await fetch(`${process.env.HOST}/api/news/all`)).json())['data']
    return {slider,news}
}



export default async function page( ) {
    const  data = (await getData()).slider
    const  AllNewsList = (await getData()).news

  return (
    <MainLayout>
        <div className="flex flex-col justify-start gap-y-10">
            <div className="container mt-20">
                <Hero news={AllNewsList}/>
            </div>
            <div className="container py-10 bg-white">
            <div className="flex justify-evenly gap-y-8  flex-row flex-wrap  ">
                <div className="flex-1">
                    <NewsCard news={AllNewsList} />
                </div>

            </div>
        </div>


            <Subscribe/>
        </div>






        <Slider slider={data} />


    </MainLayout>
  );
}
