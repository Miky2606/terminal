
import { NavButton } from "./nav_button"
import { NavBarList } from "./nav_items"

export const Navbar = ()=>{
    return <nav className="flex justify-between items-center  py-1 px-3 ">
        <NavBarList/>
     
       <NavButton/>
    
       
    </nav>
}