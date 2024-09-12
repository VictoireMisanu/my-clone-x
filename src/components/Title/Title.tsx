import Text from "../Text/Text"
import NavComponent from "../SideNav/NavComponent/NavComponent"


function Title(){
    return(
        <div className="flex flex-row justify-between">
            <Text text="Trends for you" className="text-white text-xl font-bold"/>
            <NavComponent src="/logo/settings.svg"/>
        </div>
    )
}

export default Title