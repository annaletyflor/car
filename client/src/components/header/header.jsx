import React from "react";
import "./header.css"
import logo from "../../assets/logo.svg"
import perfil from "../../assets/perfil.svg"
const Header = () => {
  return (
    <header className="col-12">
   <div className="Cabeça col-12">
<img className="logoImage col-6 col-md-1" src={logo} alt="" />
<img className="perfilImage" src={perfil} alt="" />
   </div> 
<div className="line col-12"></div>
   </header>
  );
};

export default Header;