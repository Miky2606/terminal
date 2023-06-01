import { KeyboardEvent, useRef } from "react";

import { useCommand } from "../../../store/barcommand.store";
import { formatUrl } from "../../../utils/url.formatter";
import { handleKeyEnter } from "./services/services";

export const BarCommand = () => {
  const command = useCommand();

  const value_input = useRef<HTMLInputElement>(null);

  // const [arrow_up, setArrowUp] = useState<number>(0);

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    const value = value_input.current!.value;
    if (event.key === "Enter") {
      value_input.current!.value = "";

      if (value === "cls" || value === "clear") {
        command.clear();
      } else {
        let command_get = await handleKeyEnter(value);

        if (command_get !== null) {
          command.newCommand(command_get);
        }
      }
    }
  };
  //   const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
  //    const value = value_input.current!.value;
  //      if (value_input.current !== null){
  //        if( value !== null && value !== "") {

  //          //Enter to send the command
  //     if (event.key === "Enter") {

  //       value_input.current!.value = "";
  //       history.save(value)
  //         if (value === "cls" || value === "clear") {
  //           command.clear()
  //         } else {

  //           const command_get = await hola(value);
  //           command.newCommand(command_get);
  //         }
  //       }

  //      //Autocomplete
  //     if(event.key === "ArrowRight" ){
  //      value_input.current.value = "voo"
  //     }
  //    }
  //    //History Up
  //     if(event.key === "ArrowUp" ){
  //       setArrowUp((prev)=> prev+1)
  //        if(history.history.length <= arrow_up + 1  ){
  //          setArrowUp(history.history.length - 1)
  //        }else{
  //          setArrowUp(arrow_up + 1)
  //        }

  //        value_input.current.value = history.history[arrow_up]
  //      }

  //      //History Down
  //      if(event.key === "ArrowDown" ){
  //       setArrowUp((prev)=> prev+1)
  //        if(arrow_up > 0 ){
  //          setArrowUp(arrow_up - 1)
  //        }else{
  //          setArrowUp(0)
  //        }

  //        value_input.current.value = history.history[arrow_up]
  //      }

  //    }

  //   };

  return (
    <div className="flex flex-col justify-end gap-1 px-5 items-start py-1 ">
      <p className="text-xs">~{formatUrl()}</p>
      <input
        type="text"
        placeholder="comand"
        className="nav_item h-full focus:outline-none w-full"
        onKeyDown={handleKeyDown}
        ref={value_input}
      />
    </div>
  );
};
