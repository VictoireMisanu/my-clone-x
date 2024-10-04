import Bg_ProfilePic from "../BgPic/BgPic";
import Button from "../Button/Button";
import Num from "../Number/Number";
import NavCenter from "../ProfileHeader/NavCenter/NavCenter";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfilePic from "../ProfilePic/ProfilePic";
import UserName from "../UserName/UserName";

interface ProfileInfoProps {
    className?:string;
}



export default function ProfileInfo({className}:ProfileInfoProps){
    return(
        <div className={className}>
            <ProfileHeader/>
                <div>
                  <Bg_ProfilePic />
                  <ProfilePic imageUrl="/images/me.jpeg" className="w-32 h-32 ml-10 rounded-full border-4 border-black absolute -mt-10"/>
                </div>
                <div className="flex justify-end px-10 pt-5">
                  <Button type="button" id="BtnEditProfile" className="w-32 h-10 border-[1px] border-slate-600 rounded-full text-lg text-slate-300 font-semibold hover:cursor-pointer" value="Edit Profile"/>
                </div>
                <div className="ml-3">
                  <div className="flex flex-row items-center mt-10 gap-3">
                    <UserName text="Victoire Muvumbi" className="text-[#E6E9EA] font-semibold text-xl text-nowrap"/>
                    <div className="flex flex-row gap-1 items-center border-[1px] border-slate-600 rounded-full h-6 px-3">
                      <img src="/logo/verified.svg" alt="" className="w-5"/>
                      <Button type="button" id="BtnGetVerified" value="Get verified" className="font-semibold text-slate-300"/>
                    </div>  
                  </div>
                  <UserName text="@VMuvumbi" className="text-slate-600"/>
                </div>
                <div className="mb-5">
                  <div className="flex flex-row ml-3 gap-1">
                    <img src="/logo/calendar.svg" alt="" className=""/>
                    <span className="text-slate-600">Joined December 2023</span>
                  </div>
                  <div className="flex flex-row gap-5 ml-3 mt-5">
                    <Num num={4} text="Followings" className="flex flex-row text-white items-center gap-2"/>
                    <Num num={2} text="Followers" className="flex flex-row text-white items-center gap-2"/>
                  </div>
                </div>
                <NavCenter/>
                <hr className="w-full border-gray-600"/>
        </div>
    )
}