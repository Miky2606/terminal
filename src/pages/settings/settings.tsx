import { ShorcutsView } from "./components/shorcuts";

export const Settings = () => {
  return (
    <div className="w-1/2 mx-auto h-full p-2">
      <h1 className="text-2xl text-gray-400 font-bold nav_item">Settings</h1>
      <ShorcutsView />
    </div>
  );
};
