interface profilePicProps{
    imageUrl:string;
    className:string;
}

export default function profilePic({imageUrl, className}:profilePicProps){
    return(
        <img src={imageUrl} className={className} alt="profile" />
    )
}
