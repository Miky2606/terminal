import { useCommand } from "../../store/barcommand.store"

const command =  useCommand()

export interface IShorcut{
    name:string,
    action: void
}

export const shorcut: IShorcut[] = [{
    name:"cls",
    action: command.clear()
}]

