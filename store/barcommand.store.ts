
import { create } from "zustand"
import { IShorcut } from "../src/shortcut/shorcut.interface"

 type CommandType = "success" | "error"

export interface ICommand{
    shorcut:IShorcut[]
    command:ResponseCommand[],
    newCommand:(code:ResponseCommand)=> void
    clear: ()=>void,
    shorcuts:(shortcut:IShorcut) =>  void
}


export interface ResponseCommand{
    type:CommandType,
    message:string,
    command:string,
    id:string
}

export const useCommand = create<ICommand>((set) => ({
    shorcut:[],
    command:[],
    newCommand: (code: ResponseCommand) => {
        set((state) => ({
         command: [...state.command, code]}));
      },
      clear: () => {
        set((_) => ({
         command: []}));
      },
      shorcuts: (shorcut) => 
        shorcut.action
      ,
}))