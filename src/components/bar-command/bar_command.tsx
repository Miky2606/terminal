import { useState, useEffect, KeyboardEvent, useRef } from "react"
import { getUrl } from "../navbar/nav.services"
import {useCommand} from "../../../store/barcommand.store"
import { hola } from "../.."
import { ipcMain } from "electron"



export const BarCommand = ()=>{
    const command = useCommand()
     const value_input = useRef<HTMLInputElement>(null)
    const [url, setUrl] = useState<string>("")
     const url_get = async() => {
        const path = await getUrl()
        setUrl(path)
     }
    useEffect(() => {
       url_get()
    }, [])

    const handleKeyDown = async(event:KeyboardEvent<HTMLInputElement> ) => {
        if (event.key === 'Enter') {
         const value  = value_input.current!.value
         value_input.current!.value = ""
         
          
         if(value !== null && value !== ""){
              
            if(value === "cls" || value=== "clear") {
               command.shorcuts({name:"cls", action:command.clear()})
            }else{
              
             const command_get = await hola(value)
             command.newCommand(command_get)
            
            }
            
         }
      
         
        }
        
      };
    
    return <div className="flex flex-col justify-end gap-1 px-5 items-start py-1 ">
        <p className="text-xs">~{url}</p>
        <input type="text" placeholder="comand" className="nav_item h-full focus:outline-none w-full" onKeyDown={handleKeyDown} ref={value_input}/>
    </div> 
}