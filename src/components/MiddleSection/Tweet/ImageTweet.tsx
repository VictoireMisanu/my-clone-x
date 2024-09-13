interface ImageTweetProps{
    src:string;
}


function ImageTweet({src}:ImageTweetProps){
    return(
            <div className="flex justify-center mb-5">
                <img src={src} alt="" />
            </div>
    )
}

export default ImageTweet