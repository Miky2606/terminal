import { useEffect, useState } from "react";
import { ResponseCommand, useCommand } from "../../../store/barcommand.store";
import { date } from "../../../utils/date.utils";

export const ContentCommand = () => {
  const command = useCommand();
  useEffect(() => {
    const message_command = document.querySelectorAll(".message-command");
    if (message_command.length > 0) {
      message_command[message_command.length - 1].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [command.command]);

  return (
    <div className="p-3 flex  gap-2 flex-col  h-[85%]  w-full overflow-y-scroll nav_item bg-transparent  transition-all duration-150 ease-out scrollbar-hide">
      {command.command.map((e) => (
        <ContentCard response={e} key={e.id} />
      ))}
    </div>
  );
};

const ContentCard = ({ response }: { response: ResponseCommand }) => {
  const [time, setTime] = useState<string>("now");

  useEffect(() => {
    setInterval(() => setTime(date(response.date)), 10000);
  }, []);

  return (
    <pre
      className={`${
        response.type === "error"
          ? "border-red-500 bg-red-500 bg-opacity-40 "
          : "border-green-400 bg-green-500 bg-opacity-40"
      } border-l-2   p-2 backdrop-filter backdrop-blur-sm rounded-r flex flex-col gap-2 message-command`}
    >
      <div className="flex  items-center justify-between">
        <p className="text-xs text-gray-400 ">{response.command}</p>
        <p>{time}</p>
      </div>

      <span className="text-md text-black">{response.message}</span>
    </pre>
  );
};
