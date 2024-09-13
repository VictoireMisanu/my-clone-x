//import { useState } from 'react'
import Btn from "./components/Button/Button"
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
import NameText from "./components/MiddleSection/Tweet/NameText"
import ImageTweet from "./components/MiddleSection/Tweet/ImageTweet"
import User from "./components/SideNav/User/User"



function App() {

  return (
    <div className="bg-Bg1 flex flex-row">
      <SideNav className="mx-10 flex flex-col justify-between mb-3">
          <div className="flex flex-col px-10 py-7 gap-5 justify-between">
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
          </div>
          <div className="w-full">
            <User/>
          </div>
      </SideNav>
      <MiddleSection className="w-7/12 mx-3 border-r-2 border-l-2 border-gray-600">
        <Header />
        <hr className="w-full border-gray-600"/>
        <EditTweet/>
        <hr className="w-full border-gray-600"/>
        <Tweet className="flex flex-col p-5">
            <NameText>
              <div className="w-36 h-36">
                  <NavComponent src="/logo/cnn.svg"/>
              </div>
              <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-1">
                        <Text text="CNN" className="font-semibold text-gray-200"/>
                        <NavComponent src="/logo/verified.svg"/>
                        <Text text="@CNN" className="font-extralight text-gray-500"/>
                        <Text text=".7min" className="font-extralight text-gray-500"/>
                    </div>
                    <div>
                        <Text text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' className="font-light text-gray-300"/>
                    </div> 
                </div>
            </NameText>
            <CommentSection/>
        </Tweet>
        <hr className="w-full border-gray-600"/>
        <Tweet className="flex flex-col p-5">
            <NameText>
              <div className="w-36 h-36">
                  <NavComponent src="/logo/anytime.svg"/>
              </div>
              <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-1">
                        <Text text="Twitter" className="font-semibold text-gray-200"/>
                        <NavComponent src="/logo/verified.svg"/>
                        <Text text="@Twitter" className="font-extralight text-gray-500"/>
                        <Text text=".Oct 29" className="font-extralight text-gray-500"/>
                    </div>
                    <div>
                        <Text text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' className="font-light text-gray-300"/>
                    </div> 
                </div>
            </NameText>
            <ImageTweet src="/images/imagetweet.png"/>
            <CommentSection/>
        </Tweet>
        <hr className="w-full border-gray-600"/>
        <Tweet className="flex flex-col p-5">
            <NameText>
              <div className="w-36 h-36">
                  <NavComponent src="/logo/twitterblue.svg"/>
              </div>
              <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-1">
                        <Text text="Twitter" className="font-semibold text-gray-200"/>
                        <NavComponent src="/logo/verified.svg"/>
                        <Text text="@Twitter" className="font-extralight text-gray-500"/>
                        <Text text=".7min" className="font-extralight text-gray-500"/>
                    </div>
                    <div>
                        <Text text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' className="font-light text-gray-300"/>
                    </div> 
                </div>
            </NameText>
            <CommentSection/>
        </Tweet>

      </MiddleSection>
      <RightSide className="flex flex-col px-5 py-7 gap-5">
        <Item className="flex flex-row bg-Bg2 w-80 p-3 rounded-3xl">
          <NavComponent src="/logo/search.svg"/>
          <Btn type="input" id="SearchZone" placeholder="Search Twitter" className="bg-Bg2"/>
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
                      <Text text="The New York Times" className="font-extralight text-white text-[0.8rem]"/>
                      <Text text="@nyTimes" className="font-extralight text-gray-500 text-sm"/>
              </div>
              <div>
                <NavComponent src="/logo/verified.svg"/>
              </div>
            </TextPlusIcon>
            <Btn type="button" id="BtnTweet" value="Follow" className="text-sm text-Bg2 bg-white rounded-3xl w-16 h-7"/>
          </WhoBlock>
          <WhoBlock>
            <NavComponent src="/logo/cnn.svg"/>
            <TextPlusIcon>
              <div className="flex flex-col">
                      <Text text="CNN" className="font-extralight text-white text-[0.8rem]"/>
                      <Text text="@CNN" className="font-extralight text-gray-500 text-sm"/>
              </div>
              <div>
                <NavComponent src="/logo/verified.svg"/>
              </div>
            </TextPlusIcon>
            <Btn type="button" id="BtnTweet" value="Follow" className="text-sm text-Bg2 bg-white rounded-3xl w-16 h-7 ml-16"/>
          </WhoBlock>
          <WhoBlock>
            <NavComponent src="/logo/twitterblue.svg"/>
            <TextPlusIcon>
              <div className="flex flex-col">
                      <Text text="Twitter" className="font-extralight text-white text-[0.8rem]"/>
                      <Text text="@Twitter" className="font-extralight text-gray-500 text-sm"/>
              </div>
              <div>
                <NavComponent src="/logo/verified.svg"/>
              </div>
            </TextPlusIcon>
            <Btn type="button" id="BtnTweet" value="Follow" className="text-sm text-Bg2 bg-white rounded-3xl w-16 h-7 ml-16"/>
          </WhoBlock>
        
          <a href="#"><Text className="text-TweetBtn text-xl" text="Show more"/></a>
          

        </Item>
       
      </RightSide>
    </div>
  )
}

export default App
