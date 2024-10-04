import { Link } from "react-router-dom";

export default function Arrow(){
    return(
        <div className="w-full flex items-center justify-center rounded-full hover:bg-BgProfil "><Link to="/"><img src="/logo/arrow.svg" alt="back" className="w-8 h-8"/></Link></div>
    )
}