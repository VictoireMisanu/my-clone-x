import NavComponent from "../NavComponent/NavComponent"

function User(){
    return(
        <div className="flex flex-row justify-between">
            <div>
                <a href="#"><img src="/logo/profilepic.svg" alt=""/></a>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row gap-1">
                    <a href="" className="text-gray-700 ">Bradley Ortiz</a>
                    <NavComponent src="/logo/private.svg"/>
                </div>
                <div>
                    <span className="text-gray-700">@Bradley_</span>
                </div>
            </div>
            <div>
                <NavComponent src="/logo/moreTrend.svg"/>
            </div>
        </div>
    )
}

export default User