import DB from "../../../data"
import { Link } from "react-router-dom"

function User(){
    const userConnected = DB[1]
    return(
        <div className="flex flex-row justify-between gap-5">
            <div>
            <Link to={`/${userConnected.username}`}><img src={userConnected.profilePicture} alt=""className="w-16 rounded-full"/></Link>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-1">
                    <Link to={`/${userConnected.username}`}><p className="text-gray-700 text-nowrap">{userConnected.name}</p></Link>
                    <img src="/logo/private.svg"/>
                </div>
                <div>
                    <span className="text-gray-700 text-nowrap">@{userConnected.username}</span>
                </div>
            </div>
            <div>
                <img src="/logo/moreTrend.svg"/>
            </div>
        </div>
    )
}

export default User