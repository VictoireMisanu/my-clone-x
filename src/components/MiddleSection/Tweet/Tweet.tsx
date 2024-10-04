import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";
import ImageTweet from "./ImageTweet";
import ReactPlayer from "react-player";

export interface TweetProps {
    tweetId?: number;
    profile:string;
    name: string;
    username: string;
    createdAt: string;
    likes:number;
    retweets: number;
    comments:number;
    numberShare:number;
    content: string;
    image?: string;
    videoUrl?:string;
    children?: JSX.Element | JSX.Element[]
    
}

const Tweet: React.FC<TweetProps> = ({name, profile, createdAt, username, content, image, videoUrl, likes, retweets, comments, numberShare}) =>{


    return(
        <div className="flex flex-row p-5">
            <div className="flex flex-col w-full items-center gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row items-center gap-2">
                            <Link to={`/${username}`}><img src={profile} alt="" className="w-12 rounded-full"/></Link>
                            <Link to={`/${username}`}><p className="font-semibold text-nowrap text-gray-200 hover:underline">{name}</p></Link>
                            <img src={"/logo/verified.svg"}/>
                            <Link to={`/${username}`}><p className="font-extralight text-gray-500 hover:text-white">{`@${username}`}</p></Link>
                            <p className="font-extralight text-nowrap text-gray-500">{`.${createdAt}`}</p>
                        </div>
                        <div className="w-full">
                            <p className="font-light text-gray-300">{content}</p>
                        </div> 
                    </div>
                    {(image) ? <ImageTweet src={image} alt="Tweet image" className="border-[1px] border-slate-500 rounded-md"/> :
                        (videoUrl) ? <ReactPlayer url={videoUrl} controls width="100%" height="auto"/>:" "
                    }
                    <CommentSection likes={likes} retweets={retweets} comments={comments} share={numberShare}/>
            </div>
            
        </div>
    )
}


export default Tweet