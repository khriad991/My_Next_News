import React from 'react';
import MainLayout from "@/components/main/MainLayout";
import NewsDetails from "@/components/NewsDetails";


const getData = async (id) => {
    const newsDetails = (await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`)))
     return {newsDetails}
}

const Page = async (props) => {

    const detailsNews = await getData(props.searchParams['id'])
    console.log(detailsNews)
    return (
        <MainLayout>
           
        </MainLayout>
    );
};

export default Page;