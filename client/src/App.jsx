import React from "react";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;