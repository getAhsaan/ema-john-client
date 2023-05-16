import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import ScrollFix from "../../ScrollFix";

const Home = () => {
  return (
    <div style={{ width: "98%", margin: "0 auto" }}>
      <Header></Header>
      <Outlet></Outlet>
      <ScrollFix></ScrollFix>
    </div>
  );
};

export default Home;
