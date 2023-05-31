
import { BarCommand } from "./components/bar-command/bar_command"
import { ContentCommand } from "./components/content-command/content_command"
import { Navbar } from "./components/navbar/navbar"



function App() {


  return (
    <>
      <div className='flex flex-col justify-between items-start w-screen h-screen'>
        <div className=' h-[5%] bg-zinc-700 w-full text-white'><Navbar/></div>
        <div className=' h-[85%]  w-full overflow-y-scroll nav_item'>
        <ContentCommand/>
        </div>
        <div className=' h-[10%] border-t-[0.5px] border-zinc-300 w-full'>
          <BarCommand/>
        </div>

      </div>
    </>
  )
}

export default App
