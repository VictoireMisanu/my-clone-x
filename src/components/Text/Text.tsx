interface TextProps{
    text:string | number;
    className?:string;
}


function Text ({text, className}:TextProps){
    return(
        <div className={className}>{text}</div>
    )
}

export default Text