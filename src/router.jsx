import React from "react";
import { useRoutes } from "react-router";

//* Navbar
import Navbar from "./components/Navbar";

const routes = [];

const Router = () => {
  const element = useRoutes(routes);
  return (
    <div className="flex">
      <Navbar />
      <div>{element}</div>
    </div>
  );
};

export default Router;
