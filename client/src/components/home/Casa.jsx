import React from "react";
import "./Casa.css";
import fotopreto from "../../assets/fotofundopreto.svg";
import carro1 from "../../assets/Carro1.svg";
import carro2 from "../../assets/Carro2.svg";
import carro3 from "../../assets/Carro3.svg";

const Casa = () => {
  return (
    <div className="container-fluid all">
      <div className="row foto align-items-center justify-content-center">
        <div className="col-12 text-center">
          <h1>VENHA ALUGAR UM CARRO VRUM VRUM</h1>
        </div>
        <div className="col-12 col-md-8 botlaranja">
          <div className="row textos">
            <h2 className="col-12 col-md-4">Retirar carro em:</h2>
            <h2 className="col-12 col-md-4">Data e hora da retirada</h2>
            <h2 className="col-12 col-md-4">Data e hora da devolução</h2>
          </div>
          <div className="row search-bar">
            <div className="col-12 col-md-4 mb-3">
              <input type="search" className="form-control" id="primeira" placeholder="Local" />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <input type="search" className="form-control" id="segunda" placeholder="Data/Hora" />
            </div>
            <div className="col-12 col-md-4 mb-3">
              <input type="search" className="form-control" id="terceira" placeholder="Devolução" />
            </div>
          </div>
          <div className="text-center">
            <button className="btn greenbtn">Pesquisar!</button>
          </div>
        </div>
      </div>

      <div className="restHome">
        <h1 className="text-center">Alguns modelos de carro disponíveis:</h1>
        <div className="row vrumvrum">
          <div className="col-12 col-md-4 mb-3">
            <div className="containercar1">
              <h2>Const Nome</h2>
              <img src={carro1} alt="Hilux" />
              <h3 className="desc">Hilux, 4 portas, com porta-malas, 0 km, pronto para alugar em 2 pátios.</h3>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="containercar2">
              <h2>Const Nome</h2>
              <img src={carro2} alt="Santafé" />
              <h3 className="desc">Hilux, 4 portas, com porta-malas, 0 km, pronto para alugar em 2 pátios.</h3>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-3">
            <div className="containercar3">
              <h2>Const Nome</h2>
              <img src={carro3} alt="Toro" />
              <h3 className="desc">Hilux, 4 portas, com porta-malas, 0 km, pronto para alugar em 2 pátios.</h3>
            </div>
          </div>
        </div>
        <div className="btnAlugue">
        <button>
          Alugue Agora!
        </button>
        </div>
      </div>
    </div>
  );
};

export default Casa;
