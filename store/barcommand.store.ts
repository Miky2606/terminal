
import { create } from "zustand"


 type CommandType = "success" | "error"

export interface ICommand{
    command:ResponseCommand[],
    newCommand:(code:ResponseCommand)=> void
    clear: ()=>void,
   
}


export interface ResponseCommand{
    type:CommandType,
    message:string,
    command:string,
    id:string,
    date:Date
}

export const useCommand = create<ICommand>((set) => ({

    command:[],
    newCommand: (code: ResponseCommand) => {
        set((state) => ({
         command: [...state.command, code]}));
      },
      clear: () => {
        set((_) => ({
         command: []}));
      }
      
   
}))