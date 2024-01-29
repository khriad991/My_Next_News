
import CommentForm from "@/components/CommentFrom";
import {CgProfile} from "react-icons/cg";
const CommentList = (props) => {
    const { comments, postID } = props;
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-purple-800">Comments</h2>
            <div className="flex flex-col h-60  gap-5 overflow-y-scroll">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex flex-col gap-2">
                        <div className="flex mt-4">
                            <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                               <CgProfile size={50} className="bg-white text-black" />
                            </div>

                            <div className="ml-3">
                                <div className="font-bold capitalize text-gray-800">
                                    {comment["users"]["name"]}
                                </div>
                                <div className="mt-2 text-gray-800">
                                    <p>{comment["comment_post"]}</p>
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
