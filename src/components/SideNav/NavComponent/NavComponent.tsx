interface PropsNavComponent{
    src:string;
    text?:string;
}




function NavComponent ({src, text}: PropsNavComponent){
    return(
        <div className="flex flex-row items-center gap-5">
                <a href="#"><img src={src} alt=""/></a>
                <a href="#" className="text-white">{text}</a>
            </div>
    )
}

export default NavComponent
