import NavComponent from "../../SideNav/NavComponent/NavComponent"
import Text from "../../Text/Text"

function CommentSection (){
    return(
        <div className="flex flex-row gap-6 px-24">
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/comment.svg"/>
                <Text text="57" className="font-extralight text-gray-500"/>
            </div>
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/replied.svg"/>
                <Text text="144" className="font-extralight text-gray-500"/>
            </div>
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/like.svg"/>
                <Text text="184" className="font-extralight text-gray-500"/>
            </div>
            <div className="flex flex-row items-center">
                <NavComponent src="/logo/share.svg"/>
                <Text text="57" className="font-extralight text-gray-500"/>
            </div>
        </div>
    )
}
export default CommentSection