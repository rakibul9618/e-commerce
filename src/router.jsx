import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<div>Hlw fellow patners</div>}/>
      </Routes>
    </>
  );
};

export default Router;
