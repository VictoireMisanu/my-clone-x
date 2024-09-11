//import { useState } from 'react'
import Btn from "./components/Button/Button"
import Item from "./components/RightSide/Items/Item"
import RightSide from "./components/RightSide/RightSide"
import NavComponent from "./components/SideNav/NavComponent/NavComponent"
import SideNav from "./components/SideNav/SideNav"
import Text from "./components/Text/Text"



function App() {

  return (
    <div className="bg-Bg1 flex flex-row">
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
      <RightSide className="flex flex-col px-10 mx-10 py-7 gap-5">
        <Item className="flex flex-row bg-Bg2 w-80 p-3 rounded-3xl">
          <NavComponent src="/logo/search.svg"/>
          <Btn type="input" id="SearchZone" placeholder="Search Twitter" className="bg-Bg2"/>
        </Item>
        <Item className="flex flex-row bg-Bg2 w-80 p-3 justify-between rounded-xl">
          <Text text="Trends for you" className="text-white text-sm font-bold"/>
          <NavComponent src="/logo/settings.svg"/>
        </Item>
      </RightSide>
    </div>
  )
}

export default App
