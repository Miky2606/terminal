import { useCommand } from "../../../store/barcommand.store"

export const ContentCommand = ()=>{
    const command = useCommand()

    return <div className="p-3">
        {command.command.map(e=>
        <pre key={e.id} className="text-xs">{e.message}</pre>)}
    </div>
}