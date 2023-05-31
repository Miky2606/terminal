
import { ActionNav } from "./nav.interface";
import {ipcRenderer} from 'electron'

export const getFunction = (action:ActionNav)=>{
    switch (action) {
        case ActionNav.CLOSE:
             ipcRenderer.send("closeApp")
            break;
            case ActionNav.MINIMIZE:
             ipcRenderer.send("minimizeApp")
            break;
            case ActionNav.MAXIMIZE:
             ipcRenderer.send("maximizeApp")
            break;
    
        default:
            break;
    }
} 


export const getUrl = async():Promise<string> =>{
    const url = new URL(__dirname)
    return url.pathname.split("/")[3]
}