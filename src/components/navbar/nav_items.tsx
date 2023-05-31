import { INavBarItem, items } from "./nav.interface"

export const NavBarList = ()=>{
return    <ul className=" w-[90%] h-full flex gap-2" >
    {items.map(e => <NavBarItem item={e} key={e.id}/>)}

<button className="nav_item bg-zinc-600 px-2 rounded text-center">+</button>
</ul>
}

const NavBarItem = ({item}:{item:INavBarItem})=>{
    return <li className="nav_item px-2   border-r-[0.5px] border-green-400  text-gray-400  flex justify-between w-[20%] md:w-[10%] h-full items-center">
    <div className="text-xs text-center">~{item.url}</div>
    <button className="cursor-pointer" >x</button>
</li>
}