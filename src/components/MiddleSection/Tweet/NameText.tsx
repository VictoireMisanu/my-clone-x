//import NavComponent from "../../SideNav/NavComponent/NavComponent"
//import Text from "../../Text/Text"

interface WhoBlockProps{
    children: JSX.Element | JSX.Element[]
}


function NameText({children}:WhoBlockProps){
    return(
            <div className="flex flex-col">
                {children}
            </div>
    )
}

export default NameText