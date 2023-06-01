import { useEffect, useState, KeyboardEvent } from "react";
import {
  getShorcutsJSON,
  saveShorcutJSON,
} from "../../../../utils/url.formatter";
import { SettingsMenu } from "../layout/layout";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import beauty_js from "js-beautify";
import { draculaInit } from "@uiw/codemirror-theme-dracula";

export const ShorcutsView = () => {
  const [shorcut, setShorcut] = useState<string>("");
  const [save_shorcut, setSaveShorcut] = useState<string>("");

  const get_shorcut = async () => {
    const string = await getShorcutsJSON();

    setShorcut(string ?? "");
  };

  useEffect(() => {
    get_shorcut();
  }, []);

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "s" && e.ctrlKey) {
      saveShorcutJSON(save_shorcut);
    }
  };

  return (
    <SettingsMenu title="Shorcuts">
      <CodeMirror
        value={beauty_js(JSON.stringify(shorcut), { indent_size: 2 })}
        height="400px"
        extensions={[javascript({ jsx: true })]}
        theme={draculaInit({
          settings: {
            foreground: "white",
            caret: "red",
            lineHighlight: "#blue",
            fontFamily: "monospace",
            selection: "white",
            gutterForeground: "white",
          },
        })}
        className="nav_item w-full h-full scrollbar-hide"
        onKeyDown={handleKeyDown}
        onChange={setSaveShorcut}
      />
    </SettingsMenu>
  );
};
