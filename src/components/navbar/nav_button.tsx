import { INavBarButton, button_nav } from "../services/nav.interface"

export const NavButton = ()=>{
    return <div className="flex gap-3 items-center">
    {button_nav.map((e, i)=><NavButtonItem button={e} key={i}/>)}

</div>

}

const NavButtonItem = ({button}: {button:INavBarButton})=>{
return <button onClick={button.onClick} className="nav_item hover:bg-zinc-500 p-1 rounded"  title={button.title}><button.Icon/></button>
}