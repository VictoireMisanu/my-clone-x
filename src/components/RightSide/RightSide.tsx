// interface RightSideProps {
//     className?:string;
//     children: JSX.Element | JSX.Element[]
// }

import Button from "../Button/Button"
import NavComponent from "../SideNav/NavComponent/NavComponent"
import Title from "../Title/Title"
import Item from "./Items/Item"
import ItemsContent from "./ItemsContent"
import WhoBlock from "./WhoItems/WhoBlock"
import TextPlusIcon from "./WhoItems/WhoText"
import Text from "../Text/Text"


function RightSide (){
    return(
        <div className="hidden lg:flex flex-col px-5 py-7 gap-5">
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
              
        </div>
    )
}

export default RightSide