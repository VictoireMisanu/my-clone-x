interface BtnProps{
    type:string;
    id?:string;
    className?:string;
    value?:string;
    placeholder?:string;
}


function Button({type, id, className, value, placeholder}:BtnProps){
    return(
        <input type={type} id={id} className={className} value={value} placeholder={placeholder}/>
    )
}

export default Button