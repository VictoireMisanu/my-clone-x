import Arrow from "../Arrow/Arrow";
import UserName from "../UserName/UserName";
import Text from "../Text/Text";

export default function ProfileHeader(){
    return(
        <div className="w-1/2 flex flex-row items-center gap-5 m-5">
            <Arrow/>
            <div className="flex flex-col">
                <UserName/>
                <div className="flex flex-row text-gray-500 items-center gap-2">
                    <small>0</small>
                    <Text className="" text="post"/>
                </div>
            </div>
        </div>
    )
}