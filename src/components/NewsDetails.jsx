import { formatDistance } from "date-fns";
import HTMLReactParser from "html-react-parser";
import Image from "next/image";
const NewsDetails = (props) => {
    const { details } = props;
    console.log("details-------->>>>", details);
    return (
        <div className="container">
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl font-bold">{details.title}</h1>

                            {/* publish date, category name comment count */}
                            <div className="flex flex-col gap-5 md:flex-row">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-5">
                                  {/*  <span className="text-gray-400">
                                          Published:{" "}
                                            {formatDistance(
                                                new Date(details["createdAt"]),
                                                new Date(),
                                                {
                                                    addSuffix: true,
                                                }
                                            )}
                                    </span>*/}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-5">
                    <span className="text-gray-400">
                      {/*Category: {details["categories"]["name"]}*/}
                    </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-5">
                                        <span className="text-gray-400">{20} Comments</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-5">
                                        <img
                                            className="w-full"
                                            src={details["img1"]}
                                            // width={1920}
                                            // height={1080}
                                            alt={details["title"]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-5">
                                        {details["logn_des"]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
