import Text from "../Text/Text"

function ItemsContent(){
    return(
        <div className="flex flex-col">
            <Text text="Trending in Turkey" className="font-extralight text-white"/>
            <Text text="#SQUID" className="font-bold text-white"/>
            <Text text="2,066 Tweets" className="font-extralight text-white"/>
        </div>
    )
}

export default ItemsContent