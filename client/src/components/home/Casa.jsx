import React from "react";
import "./Casa.css"
import fotopreto from "../../assets/fotofundopreto.svg"
import carro1 from "../../assets/Carro1.svg"
import carro2 from "../../assets/Carro2.svg"
import carro3 from "../../assets/Carro3.svg"


const Casa = () => {
  return (
    <div className="col-12 all">
    <div className="foto col-12" style={{ 
  backgroundRepeat:"no-repeat"}}>

 <h1>
 VENHA ALUGAR UM CARRO VRUM VRUM
 </h1>
 <div className="botlaranja col-10">
  <div className="textos">
<h2 className="texto1">
  Retirar carro em:
</h2>
<h2> 
  Data e hora da retirada
</h2>
<h2>
  data e hora da devolução
</h2>
</div>
<div className="search-bar col-10">
  <div className="firstcamp col-6">
  <input type="search" name="primeira" id="primeira" />
  </div>
  <div className="secondcamp col-4">
  <input type="search" name="segunda" id="segunda" />
  </div>
  <div className="tercampc col-4">
  <input type="search" name="terceira" id="terceira" />
  </div>
</div>
<button className="greenbtn col-2 ">
 <h2>Pesquisar!</h2>
</button>
 </div>
    </div>
    <div className="restHome col-12">
      <h1>
      Alguns modelos de carro disponivel:
      </h1>
<div className="vrumvrum d-flex">
<h2>Const nomecar</h2>
<h2>Const nomecar</h2>
<h2>Const nomecar</h2>
      <div className="containercar1  ">
      
      <img src={carro1} alt="Hilux"></img>
      </div>
      <div className="containercar2 ">
      
      <img src={carro2} alt="Santafé"></img>
      </div>
      <div className="containercar3 ">
      
      <img src={carro3} alt="Toro"></img>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Casa;