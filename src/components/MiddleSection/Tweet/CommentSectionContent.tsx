interface ItemProps{
    src:string;
    text:number;
    className:string;
}

export default function CommentSectionContent({src, text, className}:ItemProps){
    return(
        <div className={className}>
                <img src={src}/>
                <p className={className}>{text}</p>
        </div>
    )
}