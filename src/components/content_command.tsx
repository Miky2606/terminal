import { ResponseCommand, useCommand } from "../../store/barcommand.store"

export const ContentCommand = ()=>{
    const command = useCommand()
    return <div className="p-3 flex  gap-2 flex-col justify-end h-[85%]  w-full overflow-y-scroll nav_item bg-transparent scrollbar-hide transition-all duration-150 ease-out">
        
        {command.command.map(e=>
        <ContentCard response={e} key={e.id} />)}
    </div>
}

const ContentCard = ({response}:{response: ResponseCommand}) =>{
    
   
   return <pre className={`${response.type === "error" ? 'border-red-500 bg-red-500 bg-opacity-20 ' : 'border-green-400 bg-green-400 bg-opacity-20'} border-l-2   p-2 backdrop-filter backdrop-blur-sm rounded-r flex flex-col gap-2`}>
    
    <p className="text-xs text-gray-400 ">{response.command}</p>
    
    <span className="text-md text-black">
        {response.message}
    </span>
   
   </pre>
}