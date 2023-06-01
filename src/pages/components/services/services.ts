

import { ResponseCommand, useCommand } from "../../../../store/barcommand.store";

import { hola } from "../../..";
import { readFileSync } from "fs";
import { IShorcut } from "./interface";



export const GetCommand = ()=>{
    useCommand().clear()
}


//Handle Enter
export const handleKeyEnter = async ( value:string): Promise<ResponseCommand | null>=>{
     let command_set:string = ""
        if(value !== ""){
            setHistory(value)
           

           
              command_set = await findShorcuts(value)  ?? value
           
            //Verify Shorcuts
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


//Find Shorcuts
const findShorcuts = async( short:string):Promise<string | null>=>{
      const split = short.split(" ")
       
    const read = await readFileSync(process.env.PUBLIC + '/shorcut.json')

    const shortcuts = JSON.parse(read.toString()).shorcut as IShorcut[]; 
    const find = shortcuts.filter((e) => e.short === split[0])
    
   return find[0] !== undefined ? split.length === 1 ? find[0].execute : find[0].execute + ` ${split[1]}` : null
}
