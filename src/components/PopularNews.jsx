
import Image from "next/image";
import Link from "next/link";
import Subscribe from "./Subscribe";

const PopularNewsList = ({props}) => {
    const { popular } = props;
    return (
        <div>
            <div className="bg-black mb-5 rounded text-white p-2">
                <span className="p-1">Random News</span>
            </div>
            {popular?.map((item, i) => (
                <Link
                    key={i}
                    href={`/news?id=${item["id"]}`}
                    className="col-span-1 py-1 px-0"
                >
                    <div className=" border-b-[1px] bg-white shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 hover:text-blue-500 ease-in-out transition-all duration-300">
                            <div className="col-span-1 md:col-span-1 lg:col-span-1">
                                <Image
                                    className="w-full"
                                    src={item["img1"]}
                                    width={1920}
                                    height={1080}
                                    priority={true}
                                    alt={item["title"]}
                                />
                            </div>
                            <div className="col-span-1 md:col-span-1 lg:col-span-1 p-3">
                                <h6>{item.title}</h6>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            <div className="bg-black mt-2 rounded text-white p-2">
                <span className="p-1">SUBSCRIBE</span>
            </div>
            <div className="col-span-1 py-1">
                <Subscribe />
            </div>
        </div>
    );
};

export default PopularNewsList;
