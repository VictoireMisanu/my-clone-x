//import NavComponent from "../../SideNav/NavComponent/NavComponent"
//import Text from "../../Text/Text"

interface WhoBlockProps{
    children: JSX.Element | JSX.Element[]
}


function NameText({children}:WhoBlockProps){
    return(
            <div className="flex flex-row gap-5">
                {children}
            </div>
    )
}

export default NameText