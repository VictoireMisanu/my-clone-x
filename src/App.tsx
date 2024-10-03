//import { useState } from 'react'
import Button from "./components/Button/Button"
import Item from "./components/RightSide/Items/Item"
import RightSide from "./components/RightSide/RightSide"
import NavComponent from "./components/SideNav/NavComponent/NavComponent"
import SideNav from "./components/SideNav/SideNav"
import Title from "./components/Title/Title"
import ItemsContent from "./components/RightSide/ItemsContent"
import Text from "./components/Text/Text"
import WhoBlock from "./components/RightSide/WhoItems/WhoBlock"
import TextPlusIcon from "./components/RightSide/WhoItems/WhoText"
import MiddleSection from "./components/MiddleSection/MiddleSection"
import Header from "./components/MiddleSection/Header/Header"
import EditTweet from "./components/MiddleSection/EditTweet/EditTweet"
import Tweet from "./components/MiddleSection/Tweet/Tweet"
import CommentSection from "./components/MiddleSection/Tweet/CommentSection"
import User from "./components/SideNav/User/User"
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import ProfileInfo from "./components/Pages/ProfileInfo"
import ProfileHeader from "./components/ProfileHeader/ProfileHeader"
import Bg_ProfilePic from "./components/BgPic/BgPic"
import ProfilePic from "./components/ProfilePic/ProfilePic"
import UserName from "./components/UserName/UserName"
import Num from "./components/Number/Number"





function App() {

  return (
    
  <BrowserRouter>
    <div className="bg-Bg1 flex flex-row justify-center">
        <SideNav className="mx-10 flex flex-col justify-between mb-3">
                <div className="flex flex-col px-10 py-7 gap-8 justify-between">
                  <NavComponent src="/logo/twitter.svg"/>
                  <NavComponent src="/logo/logoHome.svg" text="Home"/>
                  <NavComponent src="/logo/explore.svg" text="Explore"/>
                  <NavComponent src="/logo/notification.svg" text="Notifications"/>
                  <NavComponent src="/logo/message.svg" text="Message"/>
                  <NavComponent src="/logo/bookMark.svg" text="BookMark"/>
                  <NavComponent src="/logo/list.svg" text="List"/>
                  <NavLink to="/profile"><NavComponent src="/logo/profile.svg" text="Profile"/></NavLink>
                  <NavComponent src="/logo/more.svg" text="More"/>
                  <Button type="button" id="ButtonTweet" value="Tweet" className="text-xl text-white bg-TweetBtn rounded-2xl w-36 h-10"/>
                </div>
                <div className="w-full">
                  <User/>
                </div>
        </SideNav>
        <Routes>
            <Route path="/">
              <Route index element={
                  <MiddleSection className="w-5/12 mx-3 border-r-[1px] border-l-[1px] border-slate-700">
                <Header />
                <hr className="w-full border-gray-600"/>
                <EditTweet/>
                <hr className="w-full border-gray-600"/>
                <Tweet publisherName="CNN" username="CNN" date="7min" avatarUrl="/logo/cnn.svg" content='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.'>
                  <CommentSection likes={122} comments={22} retweets={55} share={0}/>
                </Tweet>
                    
                <hr className="w-full border-gray-600"/>
                <Tweet publisherName="The New York Times" username="anytimes" date="2h" avatarUrl="/logo/anytime.svg" content='Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land' imageUrl="/images/imagetweet.png">
                  <CommentSection likes={482} comments={19} retweets={482} share={0}/>
                </Tweet>
                <hr className="w-full border-gray-600"/>
                <Tweet publisherName="Twitter" username="Twitter" date="Oct 4" avatarUrl="/logo/twitterblue.svg" content='Hello litterally everyone'>
                  <CommentSection likes={122} comments={22} retweets={55} share={65}/>
                </Tweet>
                <hr className="w-full border-gray-600"/>
                <Tweet publisherName="Twitter" username="Twitter" date="Oct 4" avatarUrl="/logo/twitterblue.svg" content='Hello litterally everyone'>
                  <CommentSection likes={122} comments={22} retweets={55} share={65}/>
                </Tweet>
                  </MiddleSection> 
              }/>
            </Route>
          <Route path="/profile" element={
            <ProfileInfo className="w-5/12 mx-3 border-r-[1px] border-l-[1px] border-slate-700">
                <ProfileHeader/>
                <div>
                  <Bg_ProfilePic />
                  <ProfilePic imageUrl="/images/me.jpeg" className="w-32 h-32 ml-10 rounded-full border-4 border-black absolute -mt-10"/>
                </div>
                <div className="flex justify-end px-10 pt-5">
                  <Button type="button" id="BtnEditProfile" className="w-32 h-10 border-[1px] border-slate-600 rounded-full text-lg text-slate-300 font-semibold hover:cursor-pointer" value="Edit Profile"/>
                </div>
                <div className="ml-3">
                  <div className="flex flex-row items-center mt-10 gap-3">
                    <UserName text="Victoire Muvumbi" className="text-[#E6E9EA] font-semibold text-xl text-nowrap"/>
                    <div className="flex flex-row gap-1 items-center border-[1px] border-slate-600 rounded-full h-6 px-3">
                      <img src="/logo/verified.svg" alt="" className="w-5"/>
                      <Button type="button" id="BtnGetVerified" value="Get verified" className="font-semibold text-slate-300"/>
                    </div>  
                  </div>
                  <UserName text="@VMuvumbi" className="text-slate-600"/>
                </div>
                <div>
                  <div className="flex flex-row ml-3 gap-1">
                    <img src="/logo/calendar.svg" alt="" className=""/>
                    <span className="text-slate-600">Joined December 2023</span>
                  </div>
                  <div className="flex flex-row gap-5 ml-3 mt-5">
                    <Num num={4} text="Followings" className="flex flex-row text-white items-center gap-2"/>
                    <Num num={2} text="Followers" className="flex flex-row text-white items-center gap-2"/>
                  </div>
                </div>
            </ProfileInfo>} />
        </Routes>
        <RightSide className="hidden lg:flex flex-col px-5 py-7 gap-5">
                <Item className="flex flex-row bg-Bg2 w-80 p-3 rounded-3xl">
                  <NavComponent src="/logo/search.svg"/>
                  <Button type="input" id="SearchZone" placeholder="Search Twitter" className="bg-Bg2 outline-none text-white"/>
                </Item>
                <Item className="flex flex-col bg-Bg2 w-80 p-3 justify-between rounded-xl">
                  <Title/>
                  <ItemsContent/>
                  <ItemsContent/>
                  <ItemsContent/>
                  <ItemsContent/>
                  <a href="#"><Text className="text-TweetBtn text-xl" text="Show more"/></a>
        
                </Item>
                <Item className="flex flex-col bg-Bg2 w-80 p-3 justify-between rounded-xl">
                  <Text className="text-white text-xl font-bold mb-3" text="Who to follow"/>
                  <WhoBlock>
                    <NavComponent src="/logo/anytime.svg"/>
                    <TextPlusIcon>
                      <div className="flex flex-col">
                              <Text text="The New York Times" className="font-extralight text-white text-[0.8rem] w-full flex-nowrap"/>
                              <Text text="@nyTimes" className="font-extralight text-gray-500 text-sm"/>
                      </div>
                      <div>
                        <NavComponent src="/logo/verified.svg"/>
                      </div>
                    </TextPlusIcon>
                    <Button type="button" id="ButtonTweet" value="Follow" className="text-sm text-Bg2 bg-white rounded-3xl w-24 h-7"/>
                  </WhoBlock>
                  <WhoBlock>
                    <NavComponent src="/logo/cnn.svg"/>
                    <TextPlusIcon>
                      <div className="flex flex-col">
                              <Text text="CNN" className="font-extralight text-white text-[0.8rem] w-full flex-nowrap"/>
                              <Text text="@CNN" className="font-extralight text-gray-500 text-sm"/>
                      </div>
                      <div>
                        <NavComponent src="/logo/verified.svg"/>
                      </div>
                    </TextPlusIcon>
                    <Button type="button" id="BtnTweet" value="Follow" className="text-sm text-Bg2 bg-white rounded-3xl w-24 h-7"/>
                  </WhoBlock>
                  <WhoBlock>
                    <NavComponent src="/logo/twitterblue.svg"/>
                    <TextPlusIcon>
                      <div className="flex flex-col">
                              <Text text="Twitter" className="font-extralight text-white text-[0.8rem] w-full flex-nowrap"/>
                              <Text text="@Twitter" className="font-extralight text-gray-500 text-sm"/>
                      </div>
                      <div>
                        <NavComponent src="/logo/verified.svg"/>
                      </div>
                    </TextPlusIcon>
                    <Button type="button" id="ButtonTweet" value="Follow" className="text-sm text-Bg2 bg-white rounded-3xl w-24 h-7"/>
                  </WhoBlock>
        
                
                  <a href="#"><Text className="text-TweetBtn text-xl" text="Show more"/></a>
                  
        
                </Item>
              
        </RightSide>
    </div>
  </BrowserRouter>
    
  
  )
}

export default App
