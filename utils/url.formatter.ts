import {readFileSync, writeFileSync} from "fs"


export const formatUrl = ():string =>{
    return new URL(process.cwd()).toString().split("/").pop() ?? ""
}

export const getShorcutsJSON = async ():Promise<string | null> =>{
    try{
        const read = await readFileSync(process.env.PUBLIC + '/shorcut.json')
    
        return JSON.parse(read.toString());
        
    }catch (error){
       return null

    }
}

export const saveShorcutJSON = async (value: string)=>{
    try {
        await writeFileSync(process.env.PUBLIC + '/shorcut.json', value)
    } catch (error) {
        console.log(error)
    }
} 