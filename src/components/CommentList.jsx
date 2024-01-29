import { formatDistance } from "date-fns";
import Image from "next/image";
import CommentForm from "@/components/CommentFrom";


const CommentList = (props) => {
    const { comments, postID } = props;

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-purple-800">Comments</h2>
            <div className="flex flex-col h-60  gap-5 overflow-y-scroll">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex flex-col gap-2">
                        <div className="flex mt-4">
                            <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                                <Image
                                    src="/images/profile.png"
                                    width={50}
                                    height={50}
                                    alt="user"
                                />
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-purple-800">
                                    {comment["users"]["firstName"]} {comment["users"]["lastName"]}
                                </div>
                                <div className="text-gray-600">
                                    {formatDistance(new Date(comment["createdAt"]), new Date(), {
                                        addSuffix: true,
                                    })}
                                </div>
                                <div className="mt-2 text-purple-800">
                                    <p>{comment["descriptions"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CommentForm postID={postID} />
        </div>
    );
};

export default CommentList;
