import Btn from "../../Button/Button"

function EditTweet (){
    return(
       <div className="flex flex-col gap-5 mx-5 my-3">
            <div className="flex flex-row justify-between items-center w-3/5 h-10">
                <a href="#"><img src="/logo/profilepic.svg" alt=""/></a> 
                <Btn type="input" id="EditTweet" placeholder="What's happening?" className="bg-black text-white w-4/5 placeholder:text-2xl"/>
            </div>
            <div className="flex flex-row justify-between items-center h-10">
                <div className="flex flex-row ml-20 gap-2">
                    <a href="#"><img src="/logo/image.svg" alt=""/></a>
                    <a href="#"><img src="/logo/gif.svg" alt=""/></a> 
                    <a href="#"><img src="/logo/stat.svg" alt=""/></a> 
                    <a href="#"><img src="/logo/emoji.svg" alt=""/></a> 
                    <a href="#"><img src="/logo/agenda.svg" alt=""/></a> 
                </div> 
                <Btn type="button" id="BtnTweet" value="Tweet" className="text-lg text-white bg-TweetBtn rounded-2xl w-20 h-10"/>
            </div>
             
       </div>
    )
}

export default EditTweet

