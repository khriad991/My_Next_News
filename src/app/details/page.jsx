import React from 'react';
import MainLayout from "@/components/main/MainLayout";
import NewsDetails from "@/components/NewsDetails";
import NewsCard from "@/components/NewsCard";
import {data} from "autoprefixer";


const getData = async (id) => {
    const newsDetails = (await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)))
     return {newsDetails}
}

const Page = async (props) => {
    let id = props.searchParams['id']

    const data = await getData(id)
    console.log(data)
    return (
        <MainLayout>
            <div className="container">
                <NewsDetails details={data.newsDetails} />

            </div>
           
        </MainLayout>
    );
};

export default Page;