
interface BgImageProps{
    imageUrl?:string;
    
}
export default function BackgroundPic({imageUrl}:BgImageProps){
    return(
        <div>
            { imageUrl ?
                    <img src={imageUrl} className="w-full h-60"/>
                    
                    :
                    <div className="w-full h-60 bg-BgProfil"></div>}
           
        </div>
    )
}