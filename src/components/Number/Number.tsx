interface NumProps{
    num:number;
    text:string;
    className:string;
}
export default function Num({num, text, className}:NumProps){
    return(
        <div className={className}>
                    <small>{num}</small>
                    <span>{text}</span>
        </div>
    )
}