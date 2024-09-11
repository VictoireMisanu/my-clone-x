interface BtnProps{
    type:string;
    id?:string;
    className?:string;
    value:string;
}


function Btn({type, id, className, value}:BtnProps){
    return(
        <input type={type} id={id} className={className} value={value} />
    )
}

export default Btn