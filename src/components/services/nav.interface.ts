import { IconType } from "react-icons";
import { AiOutlineMinus, AiOutlineSetting } from "react-icons/ai";
import {FiSquare} from "react-icons/fi"
import {RxCross1} from 'react-icons/rx'
import { getFunction, getUrl } from "./nav.services";


export enum ActionNav{
    CLOSE,
    MINIMIZE,
    MAXIMIZE,
    SETTINGS
}


export interface INavBarButton{
  Icon: IconType,
  onClick? : ()=> void
  title:string
}

export interface INavBarItem{
    id: string
    url:string,

}

export const items:INavBarItem[] = [
    {
        id: "1",
        url:  "Jonathan"
    }
]


export const button_nav : INavBarButton[]=[
    {
        Icon:AiOutlineSetting,
        title:"Settings"
        
    },{
    Icon: AiOutlineMinus,
    onClick: ()=> getFunction(ActionNav.MINIMIZE),
    title:"Minimize"
},
{
    Icon: FiSquare,
    onClick: ()=> getFunction(ActionNav.MAXIMIZE),
    title:"Maximize"
},
{
    Icon: RxCross1,
    onClick: ()=> getFunction(ActionNav.CLOSE),
    title:"Close"
}]