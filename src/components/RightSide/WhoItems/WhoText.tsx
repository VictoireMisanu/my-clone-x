//import NavComponent from "../../SideNav/NavComponent/NavComponent";
//import Text from "../../Text/Text"

interface TextPlusIconProps{
    children: JSX.Element | JSX.Element[]
}

function TextPlusIcon({children}:TextPlusIconProps){
    return(
            <div className="flex flex-row gap-3">
                {children}
            </div>
    )
}

export default TextPlusIcon