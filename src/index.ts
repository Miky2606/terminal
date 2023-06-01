
import {  execSync } from "child_process";
import { ResponseCommand } from "../store/barcommand.store";




export const hola = async( code:string): Promise<ResponseCommand>=>{
   
   try {
    
    const x = await execSync(code)
    const split = code.split(" ")
   
    if(split.length > 1 && split[0] === "cd" && split[1] !== "" ){
      process.chdir(process.cwd() + '/'+split[1])
    }
     
     return {id:crypto.randomUUID(),type:'success',message:x.toString()
     .replaceAll("<DIR>", "📂")
     , command:code, date:new Date()}
   
   } catch (error:any ) {
    
    if(error instanceof Error ){
     
    return {id:crypto.randomUUID(),type:'error',message:`❌ ${error.message}`, command:code, date:new Date()}
    }
  
    return {id:crypto.randomUUID(),type:'error',message:"Error", command:code, date:new Date()}
   }
     
      
}

