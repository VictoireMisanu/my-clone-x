interface userNameProps{
    className:string;
    text:string;
}

export default function UserName({className, text}:userNameProps){
    return(
            <p className={className}>{text}</p>
    )
}