import Arrow from "../Arrow/Arrow";
import Num from "../Number/Number";
import UserName from "../UserName/UserName";


export default function ProfileHeader(){
    return(
        <div className="w-1/2 flex flex-row items-center gap-5 m-5">
            <Arrow/>
            <div className="flex flex-col">
                <UserName text="Victoire Muvumbi" className="text-[#E6E9EA] font-extrabold text-2xl text-nowrap"/>
                <Num num={0} text="post" className="flex flex-row text-gray-500 items-center gap-2"/>
            </div>
        </div>
    )
}