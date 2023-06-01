
import {  execSync } from "child_process";
import { ResponseCommand } from "../store/barcommand.store";



export const hola = async( code:string): Promise<ResponseCommand>=>{
   try {
    
    const x = await execSync(code)
     return {id:crypto.randomUUID(),type:'success',message:x.toString(), command:code}
   } catch (error:any ) {
    
    if(error instanceof Error ){
     
    return {id:crypto.randomUUID(),type:'error',message:error.message, command:code}
    }
  
    return {id:crypto.randomUUID(),type:'error',message:"Error", command:code}
   }
     
      
}

