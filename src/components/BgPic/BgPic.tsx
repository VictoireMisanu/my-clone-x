
import NavComponent from "../SideNav/NavComponent/NavComponent";
interface BgImageProps{
    imageUrl?:string;
    
}
export default function Bg_ProfilePic({imageUrl}:BgImageProps){
    return(
        <div>
            <div className="text-white">
            
               { imageUrl ?
                <NavComponent src={imageUrl} className="w-20 h-10 "/> 
                
                :
                    "welcome"}
            
            </div>
           
        </div>
    )
}