import NavComponent from "../SideNav/NavComponent/NavComponent"
import Text from "../Text/Text"

function ItemsContent(){
    return(
        <div className="flex row justify-between my-3">
            <div className="flex flex-col">
                <Text text="Trending in Turkey" className="font-extralight text-white"/>
                <Text text="#SQUID" className="font-bold text-white"/>
                <Text text="2,066 Tweets" className="font-extralight text-white"/>
            </div>
            <div>
                <NavComponent src="/logo/moreTrend.svg"/>
            </div>
        </div>
    )
}

export default ItemsContent