import React from "react";
import "./header.css"
import logo from "../../assets/logo.svg"
import perfil from "../../assets/perfil.svg"
const Header = () => {
  return (
    <header>
   <div className="Cabeça col-12">
<img className="logoImage" src={logo} alt="" />
<img className="perfilImage " src={perfil} alt="" />
   </div> 
<div className="line col-12"></div>
   </header>
  );
};

export default Header;