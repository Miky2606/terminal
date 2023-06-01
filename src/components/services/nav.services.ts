
import { ActionNav } from "./nav.interface";
import {ipcRenderer} from 'electron'
import { ResponseCommand, useCommand } from "../../../store/barcommand.store";

import { hola } from "../..";
import { readFileSync } from "fs";
import { IShorcut } from "./shorcut.interface";


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


export const GetCommand = ()=>{
    useCommand().clear()
}


//Handle Enter
export const handleKeyEnter = async ( value:string): Promise<ResponseCommand | null>=>{
     let command_set:string = ""
        if(value !== ""){
            setHistory(value)
        
            //Verify Shorcuts
            
           const read = await readFileSync(process.env.PUBLIC + '/shorcut.json')

           const shortcuts = JSON.parse(read.toString()).shorcut as IShorcut[]; 
           
            shortcuts.filter((e) =>{
            if(e.short === value){
            command_set = e.execute
            
            }else{
                command_set = value
            }
           })
            //C:\Users\Jonathan\Desktop\terminal\shorcut.json
           
            const command = await hola(command_set)
            return command
        }
 return null

}


//Set History
const setHistory = (new_element:string) =>{
    let getStorage:string[] = []
    if(localStorage.getItem("history")){
        getStorage = JSON.parse(localStorage.getItem("history") ?? "")
    }
    getStorage.push(new_element)
    
    window.localStorage.setItem("history",JSON.stringify(getStorage)  )
}