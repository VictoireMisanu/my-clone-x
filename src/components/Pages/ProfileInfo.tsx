import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePic from "./ProfilePic/ProfilePic";
import UserName from "./UserName/UserName";
import DB from "../../data"
// import Tweet from "../MiddleSection/Tweet/Tweet";
import BackgroundPic from "./BackgroundPicture/Background";
// import MiddleNav from "./MiddleNavigation/MiddleNav";
import { useState } from "react";
import UserTweet from "../MiddleSection/Tweet/UserTweet";
interface ProfileInfoProps {
    className?:string;
}



export default function ProfileInfo({className}:ProfileInfoProps){

    const {username} = useParams()
    const userFound = DB.filter((user)=> user.username === username )
    

    const [inView, setInView] = useState('post')
    const showContentPost = () => {
      setInView ('post')
    }
    const showContentReplies = () => {
      setInView ('replies')
    }

    function showContentHighLights(){
      setInView ('highLights')
    
    }
    function showContentArticles(){
      setInView ('articles')
    }
   
    function showContentMedia(){
      setInView ('medias')
    }
    return(
        <div className={className}>
            <ProfileHeader/>
                <div>
                  <BackgroundPic />
                  <ProfilePic imageUrl={userFound[0].profilePicture} className="w-32 h-32 ml-10 rounded-full border-4 border-black absolute -mt-10"/>
                </div>
                <div className="flex justify-end px-10 pt-5">
                  <Button type="button" id="BtnEditProfile" className="w-32 h-10 border-[1px] border-slate-600 rounded-full text-lg text-slate-300 font-semibold hover:cursor-pointer" value="Edit Profile"/>
                </div>
                <div className="ml-3">
                  <div className="flex flex-row items-center mt-10 gap-3">
                    <UserName text={userFound[0].name} className="text-[#E6E9EA] font-semibold text-xl text-nowrap"/>
                    <div className="flex flex-row gap-1 items-center border-[1px] border-slate-600 rounded-full h-6 px-3">
                      <img src="/logo/verified.svg" alt="" className="w-5"/>
                      <Button type="button" id="BtnGetVerified" value="Get verified" className="font-semibold text-slate-300"/>
                    </div>  
                  </div>
                  <UserName text={`@${userFound[0].username}`} className="text-slate-600"/>
                </div>
                <div className="mb-5">
                  <div className="flex flex-row ml-3 gap-1">
                    <img src="/logo/calendar.svg" alt="" className=""/>
                    <span className="text-slate-600">{userFound[0].creationAccountDate}</span>
                  </div>
                  <div className="flex flex-row gap-5 ml-3 mt-5">
                    <div className="flex flex-row text-white items-center gap-2">
                      <small className="font-bold">{userFound[0].followingCount}</small>
                      <p className="text-slate-600">Followings</p>
                    </div>
                    <div className="flex flex-row text-white items-center gap-2">
                      <small className="font-bold">{userFound[0].followersCount}</small>
                      <p className="text-slate-600">Followers</p>
                    </div>
                  </div>
                </div>
                <div>
                <ul className="flex flex-row justify-around font-bold text-lg text-white ">
                  <li className="p-5 cursor-pointer hover:bg-slate-900 border-b-4 border-blue-700" onClick={showContentPost}>Posts</li>
                  <li className="p-5 cursor-pointer hover:bg-slate-900"  onClick={showContentReplies}>Replies</li>
                  <li className="p-5 cursor-pointer hover:bg-slate-900" onClick={showContentHighLights}>HighLights</li>
                  <li className="p-5 cursor-pointer hover:bg-slate-900" onClick={showContentArticles}>Articles</li>
                  <li className="p-5 cursor-pointer hover:bg-slate-900" onClick={showContentMedia}>Media</li>
                </ul>
                  <hr className="w-full border-gray-600"/>
                </div>
                <section>
                  {
                    inView == 'post'? <UserTweet/> : ''
                  }
                  {
                    inView == 'replies'? <li className="text-white">Replies</li> : ''
                  }
                  {
                    inView == 'highLights'? <li className="text-white">highLights</li> : ''
                  }
                  {
                    inView == 'articles'? <li className="text-white">Articles</li> : 'Articles'
                  }
                  {
                    inView == 'medias'? <li className="text-white">media</li> : ''
                  }
                </section>
                <hr className="w-full border-gray-600"/>
        </div>
    )
}