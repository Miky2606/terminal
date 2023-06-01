import { BarCommand } from "./components/bar_command";
import { ContentCommand } from "./components/content_command";
import { Navbar } from "./layout/navbar/navbar";

function App() {
  return (
    <>
      <ContentCommand />

      <div className=" h-[10%] border-t-[0.5px] border-zinc-300 w-full">
        <BarCommand />
      </div>
    </>
  );
}

export default App;
