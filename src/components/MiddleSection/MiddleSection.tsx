import EditTweet from "./EditTweet/EditTweet";
import Header from "./Header/Header";
// import CommentSection from "./Tweet/CommentSection";
import Tweet from "./Tweet/Tweet";
import DB from "../../data"
import { useState } from "react";
// import NavComponent from "../SideNav/NavComponent/NavComponent";

interface MiddleSectionProps {
    className?:string;
}

// interface userProps{
//     userId:number;
//     name:string;
//     userName:string;
//     bio:string;
//     profilePicture:string;
//     followersCount: number;
//     followingCount: number;
//     tweet: TweetProps;

// }

function MiddleSection ({className}:MiddleSectionProps){

        const [tweets] = useState(DB.flatMap(user =>
            user.tweets.map(tweet => ({
              avatar: user.profilePicture,
              username: user.username,
              name: user.name,
              createdAt:tweet.createdAt,
              content: tweet.content,
              time: tweet.createdAt,
              numberLike: tweet.likes,
              numberComment: tweet.comments,
              numberRetweet: tweet.retweets,
              numberShare: tweet.numberShare,
              image: tweet.image,
              video:tweet.videoUrl
            }))
          )
        );
        
    return(
        <div className={className}>
                <Header />
                    <hr className="w-full border-gray-600"/>
                    <EditTweet username={DB[1].username}/>
                    <hr className="w-full border-gray-600"/>
                    
                    {
                        tweets.map((tweet, index)=>(
                            <>
                                <Tweet key={index}
                                    profile={tweet.avatar} name={tweet.name} username={tweet.username} 
                                    createdAt={tweet.createdAt} content={tweet.content} image={tweet.image} videoUrl={tweet.video}
                                    likes={tweet.numberLike} comments={tweet.numberComment} retweets={tweet.numberRetweet} numberShare={tweet.numberShare}
                                    />
                                <hr className="w-full border-gray-600"/>
                            </>
                        ))
                    }
                        
                    {/* <hr className="w-full border-gray-600"/>
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
                    </Tweet> */}
        </div>
    )
}

export default MiddleSection