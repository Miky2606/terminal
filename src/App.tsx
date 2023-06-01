
import { BarCommand } from "./components/bar_command"
import { ContentCommand } from "./components/content_command"
import { Navbar } from "./components/navbar/navbar"



function App() {


  return (
    <>
      <div className='flex flex-col justify-between items-start w-screen h-screen '>
        <div className=' h-[5%] bg-zinc-700 w-full text-white'><Navbar/></div>
  
        <ContentCommand/>
        
        <div className=' h-[10%] border-t-[0.5px] border-zinc-300 w-full'>
          <BarCommand/>
        </div>

      </div>
    </>
  )
}

export default App
