export default function NavCenter(){
    return(
        <ul className="flex flex-row justify-around font-bold text-lg text-white ">
            <li className="hover:bg-slate-900 cursor-pointer">Posts</li>
            <li className="hover:bg-slate-900">Replies</li>
            <li className="hover:bg-slate-900">HighLights</li>
            <li className="hover:bg-slate-900">Articles</li>
            <li className="hover:bg-slate-900">Media</li>
        </ul>
    )
}