
import NavComponent from "../../SideNav/NavComponent/NavComponent"
//import NameText from "./NameText"
import Text from "../../Text/Text"
import ImageTweet from "./ImageTweet";

export interface TweetProps {
    publisherName: string;
    username: string;
    date: string;
    avatarUrl: string;
    content: string;
    imageUrl?: string;
    children: JSX.Element | JSX.Element[]
    
}

const Tweet: React.FC<TweetProps> = ({publisherName, date, username, avatarUrl, content, imageUrl, children}) =>{
    return(
        <div className="flex flex-row p-5">
            <div className="">
                <NavComponent src={avatarUrl} alt={`${username}’s avatar`} className="w-1/2"/>
            </div>
            
            <div className="flex flex-col w-full gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-1">
                            <Text text={publisherName} className="font-semibold text-gray-200"/>
                            <NavComponent src={"/logo/verified.svg"}/>
                            <Text text={`@${username}`} className="font-extralight text-gray-500"/>
                            <Text text={`.${date}`} className="font-extralight text-gray-500"/>
                        </div>
                        <div className="w-full">
                            <Text text={content} className="font-light text-gray-300"/>
                        </div> 
                    </div>
                    {imageUrl && <ImageTweet src={imageUrl} alt="Tweet image"/> }
                    <div className="">
                        {children}
                    </div>
            </div>
        </div>
    )
  }


export default Tweet