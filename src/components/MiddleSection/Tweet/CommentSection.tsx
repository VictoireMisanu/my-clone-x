import NavComponent from "../../SideNav/NavComponent/NavComponent"
import Text from "../../Text/Text"
interface CommentSectionProps{
    likes: number;
    comments: number;
    retweets: number;
    share:number;
}

function CommentSection ({likes, comments, retweets, share}:CommentSectionProps){
    return(
        <div className="flex flex-row gap-6 px-24 py-3">
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/comment.svg"/>
                <Text text={comments} className="font-extralight text-gray-500"/>
            </div>
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/retweets.svg"/>
                <Text text={retweets} className="font-extralight text-gray-500"/>
            </div>
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/like.svg"/>
                <Text text={likes} className="font-extralight text-gray-500"/>
            </div>
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/share.svg"/>
                <Text text={share} className="font-extralight text-gray-500"/>
            </div>
        </div>
    )
}
export default CommentSection