interface PropsNavComponent{
    src?:string;
    alt?:string;
    text?:string;
    className?:string;
}




function NavComponent ({src, text}: PropsNavComponent){
    return(
        <div className=" py-2 px-2 flex flex-row items-center gap-5 rounded-full hover:bg-BgProfil">
                <a href="#"><img src={src} alt=""/></a>
                <a href="#" className="md:lg:text-white">{text}</a>
            </div>
    )
}

export default NavComponent
