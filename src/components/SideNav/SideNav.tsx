interface SideNavProps {
    className:string;
}

import { NavLink } from "react-router-dom"
import NavComponent from "./NavComponent/NavComponent"
import Button from "../Button/Button"
import User from "./User/User"
import DB from "../../data"


function SideNav ({className}:SideNavProps){
    const userConnected = DB[1]
    return(
        <div className={className}>
            <div className="flex flex-col px-10 py-7 gap-4 justify-between">
                  <img src="/logo/twitter.svg" className="w-10 h-10"/>
                  <div className="flex flex-col gap-5">
                    <NavComponent src="/logo/logoHome.svg" text="Home" className=""/>
                    <NavComponent src="/logo/explore.svg" text="Explore"/>
                    <NavComponent src="/logo/notification.svg" text="Notifications"/>
                    <NavComponent src="/logo/message.svg" text="Message"/>
                    <NavComponent src="/logo/bookMark.svg" text="BookMark"/>
                    <NavComponent src="/logo/list.svg" text="List"/>
                    <NavLink to={`/${userConnected.username}`}><NavComponent src="/logo/profile.svg" text="Profile"/></NavLink>
                    <NavComponent src="/logo/more.svg" text="More"/>
                  </div>
                  <Button type="button" id="ButtonTweet" value="Tweet" className="text-xl text-white bg-TweetBtn rounded-2xl w-36 h-10 hover:cursor-pointer"/>
                </div>
                <div className="w-full">
                  <User/>
                </div>
        </div>
    )
}

export default SideNav