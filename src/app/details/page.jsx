import CommentList from "@/components/CommentList";
import NewsDetails from "@/components/NewsDetails";
import MainLayout from "@/components/main/MainLayout";
import PopularNews from "@/components/PopularNews";

const getData = async (id) => {
    const details = (await (await fetch(`${process.env.HOST}/api/news/details?id=${id}`,{
                cache: "no-store"})).json())["data"];
    // const popular = (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`, {
    //             cache: "no-store",})).json())["data"];
    // const comments = (await (await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`, {
    //             next: {revalidate: 1,},})).json())["data"];

    return { details };
};

const page = async (props) => {
    let id = props.searchParams["id"];
    console.log("my details is is ----",id )
    const  details   = await getData(id);
    return (
        <MainLayout>
            <div className="container py-5">
                <div className="flex flex-col gap-y-4 md:flex-row">
                    <div className="md:w-3/4 mb-4 md:mb-0">
                        <NewsDetails details={details.details} />
                        {/*<CommentList postID={id} comments={comments} />*/}
                    </div>
                    <div className="md:w-1/4">
                        {/*<PopularNews popular={popular} />*/}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default page;
