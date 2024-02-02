import React, { ReactNode } from "react";
import { Sidebar } from "./slider";
import { Header } from "./header";
import { Footer } from "./footer";
interface LayoutsProps {
  children: ReactNode;
}
export const Layouts: React.FC<LayoutsProps> = ({ children }) => {
  return (
    <div className=" flex h-[100vh] justify-center items-center bg-cover bg-left-top bg-home-bg">
      <div className="w-[75%] h-[90%] flex flex-col overflow-hidden  box-border  border-white/25 rounded border-2 border-solid p-[2px]">
        <div className="flex flex-1 h-[90%]">
          <div className="h-full flex-1">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-grow h-full w-[65%] bg-slate-50/50 backdrop-blur-xl rounded-tr-lg">
            <Header />
            <div className=" h-[90%] overflow-y-auto">{children}</div>
          </div>
        </div>
        <div className="w-full h-[10%]">
          <Footer />
        </div>
      </div>
    </div>
  );
};
