interface TextProps{
    text:string;
    className?:string;
}


function Text ({text, className}:TextProps){
    return(
        <span className={className}>{text}</span>
    )
}

export default Text