//import { useState } from 'react'
import Btn from "./components/Button/Button"
import NavComponent from "./components/SideNav/NavComponent/NavComponent"
import SideNav from "./components/SideNav/SideNav"



function App() {

  return (
    <div className="bg-Bg1">
      <SideNav className="flex flex-col px-10 mx-10 py-7 gap-5">
          <NavComponent src="/logo/twitter.svg"/>
          <NavComponent src="/logo/logoHome.svg" text="Home"/>
          <NavComponent src="/logo/explore.svg" text="Explore"/>
          <NavComponent src="/logo/notification.svg" text="Notifications"/>
          <NavComponent src="/logo/message.svg" text="Message"/>
          <NavComponent src="/logo/bookMark.svg" text="BookMark"/>
          <NavComponent src="/logo/list.svg" text="List"/>
          <NavComponent src="/logo/profile.svg" text="Profile"/>
          <NavComponent src="/logo/more.svg" text="More"/>
          <Btn type="button" id="BtnTweet" value="Tweet" className="text-xl text-white bg-TweetBtn rounded-2xl w-36 h-10"/>
      </SideNav>
    </div>
  )
}

export default App
