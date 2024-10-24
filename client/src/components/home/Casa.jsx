import React from "react";
import "./Casa.css"
import fotopreto from "../../assets/fotofundopreto.svg"

const Casa = () => {
  return (
    <div className="col-12">
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
<div className="search-bar col-12">
  <input type="search" name="primeira" id="primeira" />
  <input type="search" name="segunda" id="segunda" />
  <input type="search" name="terceira" id="terceira" />
</div>
 </div>
    </div>
    </div>
  );
};

export default Casa;