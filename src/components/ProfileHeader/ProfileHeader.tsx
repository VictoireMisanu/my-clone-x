import Arrow from "../Arrow/Arrow";
import UserNamePost from "../UserName+NumPost/UserNamePost";

export default function ProfileHeader(){
    return(
        <div className="w-1/2 flex flex-row items-center gap-5 m-5">
            <Arrow/>
            <UserNamePost/>
        </div>
    )
}