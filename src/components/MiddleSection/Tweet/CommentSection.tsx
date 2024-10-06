import { useState } from "react";
import CommentSectionContent from "./CommentSectionContent";
// import DB from "../../../data"

interface CommentSectionProps{
    likes: number;
    comments: number;
    retweets: number;
    share:number;
    
}

function CommentSection ({comments, likes, retweets, share}:CommentSectionProps){

    // const [tweets] = useState(DB.flatMap(user =>
    //     user.tweets.map(tweet => ({
    //       avatar: user.profilePicture,
    //       username: user.username,
    //       name: user.name,
    //       createdAt:tweet.createdAt,
    //       content: tweet.content,
    //       time: tweet.createdAt,
    //       numberLike: tweet.likes,
    //       numberComment: tweet.comments,
    //       numberRetweet: tweet.retweets,
    //       numberShare: tweet.numberShare,
    //       image: tweet.image,
    //       video:tweet.videoUrl
    //     }))
    //   )
    // );
    const [Inc, setInc] = useState(0)
    function increase(){ setInc(Inc + 1)};
    
    
    return(
        <div className="flex flex-row gap-10">
                <>
                <CommentSectionContent src="/logo/comment.svg" text={comments} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-blue-700 hover:cursor-pointer" onClick={increase}/>
                <CommentSectionContent src="/logo/like.svg" text={likes} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-rose-800 hover:cursor-pointer" onClick={increase}/>
                <CommentSectionContent src="/logo/retweets.svg" text={retweets} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-green-700 hover:cursor-pointer" onClick={increase}/>
                <CommentSectionContent src="/logo/share.svg" text={share} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-blue-700 hover:cursor-pointer" onClick={increase}/>
                </>

        </div>
    )
}
export default CommentSection