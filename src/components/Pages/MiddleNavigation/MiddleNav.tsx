export default function MiddleNav(){
    return(
        <ul className="flex flex-row justify-around font-bold text-lg text-white ">
        <li className="p-5 cursor-pointer hover:bg-slate-900 border-b-4 border-blue-700">Posts</li>
        <li className="p-5 cursor-pointer hover:bg-slate-900">Replies</li>
        <li className="p-5 cursor-pointer hover:bg-slate-900">HighLights</li>
        <li className="p-5 cursor-pointer hover:bg-slate-900">Articles</li>
        <li className="p-5 cursor-pointer hover:bg-slate-900">Media</li>
      </ul>
    )
}