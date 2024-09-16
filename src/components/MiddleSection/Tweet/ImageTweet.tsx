interface ImageTweetProps{
    src:string;
    alt?:string;
}


function ImageTweet({src, alt}:ImageTweetProps){
    return(
            <div className="mb-5">
                <img src={src} alt={alt} />
            </div>
    )
}

export default ImageTweet