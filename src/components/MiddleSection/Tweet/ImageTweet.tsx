interface ImageTweetProps{
    src:string;
}


function ImageTweet({src}:ImageTweetProps){
    return(
            <div>
                <img src={src} alt="" />
            </div>
    )
}

export default ImageTweet