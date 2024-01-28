
import MainLayout from "@/components/main/MainLayout";

import Slider from "@/components/main/Slider";
import NewsCard from "@/components/NewsCard";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
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
                <NewsCard  news={data['latest'].slice(0,4)} title={'Latest'}/>
                <NewsCard  news={data['popular']} title={'Popular'}/>
                <NewsCard  news={data['feature']} title={'Featured'}/>
            </div>
            <Slider slider={data.slider} />
            <div className="container">
                <Subscribe />
            </div>
        </div>

    </MainLayout>
  );
}
