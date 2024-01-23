import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./router";
import { Layouts } from "./layouts";
import { RoutesProps } from "@/constant/types";
import { Absent } from "./pages/404";
import "./styles/index.css";
const createRoute = (routes: RoutesProps[]) => {
  const list: React.ReactNode[] = [];
  const recursion = (routes: RoutesProps[]) => {
    routes.map((route) => {
      if (route.children?.length) {
        recursion(route.children);
      } else {
        const element = (
          <Route
            element={<Layouts>{route.element}</Layouts>}
            path={route.path}
            key={route.path}
          />
        );
        route.element && list.push(element);
      }
    });
  };
  recursion(routes);
  return list;
};
export const App: React.FC = () => {
  console.log(routes);
  return (
    <HashRouter basename="/">
      <Routes>
        <>{createRoute(routes)}</>
        <Route path="*/" element={<Absent />}></Route>
      </Routes>
    </HashRouter>
  );
};
