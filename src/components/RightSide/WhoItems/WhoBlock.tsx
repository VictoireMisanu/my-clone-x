//import { Children } from "react"
//import Btn from "../../Button/Button"
//import NavComponent from "../../SideNav/NavComponent/NavComponent"
//import WhoText from "./WhoText"

interface WhoBlockProps{
    children: JSX.Element | JSX.Element[]
}


function WhoBlock({children}:WhoBlockProps){
    return(
            <div className="flex flex-row items-center my-3 ">
                {children}

            </div>
    )
}

export default WhoBlock