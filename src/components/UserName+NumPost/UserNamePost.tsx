import Text from "../Text/Text"


export default function UserNamePost(){
    return(
        <div className="flex flex-col gap-1">
            <Text className="text-[#E6E9EA] font-extrabold text-2xl text-nowrap" text="Victoire Muvumbi"/>
            <div className="flex flex-row text-gray-500 items-center gap-2">
                <small>0</small>
                <Text className="" text="post"/>
            </div>
        </div>
    )
}