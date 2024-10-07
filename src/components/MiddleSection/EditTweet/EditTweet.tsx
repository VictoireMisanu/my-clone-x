import Button from "../../Button/Button"
import DB from "../../../data"
import { Link } from "react-router-dom"

interface EditTweetProps{
    username:string;
}
function EditTweet ({username}:EditTweetProps){
    const userConnected = DB[1]
    return(
        <div className="flex flex-col gap-5 mx-5 my-3">
            <div className="flex flex-row gap-9 items-center w-3/5 h-10 mt-5">
            <Link to={`/${username}`}><img src={userConnected.profilePicture} alt=""className="w-14 md:lg:w-20 rounded-full"/></Link>
            <Button type="input" id="EditTweet" placeholder="What's happening?" className="bg-black text-white w-7/12  md:lg:w-4/5 md:lg:placeholder:text-2xl outline-none"/>
            </div>
            <div className="flex flex-row justify-between items-center h-10">
                <div className="flex flex-row ml-20 gap-2">
                    <a href="#"><img src="/logo/image.svg" alt=""/></a>
                    <a href="#"><img src="/logo/gif.svg" alt=""/></a> 
                    <a href="#"><img src="/logo/stat.svg" alt=""/></a> 
                    <a href="#"><img src="/logo/emoji.svg" alt=""/></a> 
                    <a href="#"><img src="/logo/agenda.svg" alt=""/></a> 
                </div> 
                <Button type="button" id="BtnTweet" value="Tweet" className="text-lg text-white bg-TweetBtn rounded-2xl w-20 h-10 hover:cursor-pointer"/>
            </div>
             
       </div>
    )
}

export default EditTweet

