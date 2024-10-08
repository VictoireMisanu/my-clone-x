import DB from "../../../data"
import { useParams } from "react-router-dom"
import Tweet from "./Tweet"

export default function UserTweet(){

    const {username} = useParams()
    const userFound = DB.filter((user)=> user.username === username )
    return(
        <div>
        {
          userFound[0].tweets.map((tweet)=>(
            <div>
                        <Tweet
                            profile={userFound[0].profilePicture} name={userFound[0].name} username={userFound[0].username} 
                            createdAt={tweet.createdAt} content={tweet.content} image={tweet.image} videoUrl={tweet.videoUrl}
                            likes={tweet.likes} comments={tweet.comments} retweets={tweet.retweets} numberShare={tweet.numberShare}
                            />
                        <hr className="w-full border-gray-600"/>
                    </div>
          ))
        }
      </div>
    )
}