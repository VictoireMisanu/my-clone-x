interface ImageTweetProps{
    src:string;
    alt?:string;
    className:string;
}


function ImageTweet({src, alt, className}:ImageTweetProps){
    return(
            <div className={className}>
                <img src={src} alt={alt} />
            </div>
    )
}

export default ImageTweet