import CommentSectionContent from "./CommentSectionContent";

interface CommentSectionProps{
    likes: number;
    comments: number;
    retweets: number;
    share:number;
}

function CommentSection ({likes, comments, retweets, share}:CommentSectionProps){
    return(
        <div className="flex flex-row gap-10">

            <CommentSectionContent src="/logo/comment.svg" text={comments} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-blue-700 hover:cursor-pointer hue-rotate-90 saturate-500"/>
            <CommentSectionContent src="/logo/like.svg" text={likes} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-rose-800 hover:cursor-pointer"/>
            <CommentSectionContent src="/logo/retweets.svg" text={retweets} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-green-700 hover:cursor-pointer"/>
            <CommentSectionContent src="/logo/share.svg" text={share} className="flex flex-row w-1/4 items-center gap-3 font-extralight text-gray-500 hover:text-blue-700 hover:cursor-pointer"/>
            
        </div>
    )
}
export default CommentSection