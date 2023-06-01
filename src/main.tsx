import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import { Navbar } from "./pages/layout/navbar/navbar";
import { Settings } from "./pages/settings/settings";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex flex-col justify-between items-start w-screen h-screen ">
      <div className=" h-[5%] bg-zinc-700 w-full text-white">
        <Navbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
