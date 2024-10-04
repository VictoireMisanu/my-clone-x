import Arrow from "../Arrow/Arrow";
import Num from "../Number/Number";
import UserName from "../UserName/UserName";
import DB from "../../data"
import { useParams } from "react-router-dom";


export default function ProfileHeader(){
    const {username} = useParams()
    const userFound = DB.filter((user)=> user.username === username )
    return(
        <div className="w-1/2 flex flex-row items-center gap-5 m-5">
            <Arrow/>
            <div className="flex flex-col">
                <UserName text={userFound[0].name} className="text-[#E6E9EA] font-extrabold text-2xl text-nowrap"/>
                <Num num={userFound[0].tweets.length} text="posts" className="flex flex-row text-gray-500 items-center gap-2"/>
            </div>
        </div>
    )
}