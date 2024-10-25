import React from "react";
import "./Carropatio.css"; // Estilos personalizados, se necessário

const Carropatio = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">SÃO PAULO</h2>
      <p className="text-center">Carros disponíveis:</p>
      
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-10 col-md-8 my-2">
          <div className="border rounded p-3 text-center bg-light">
            <p className="mb-1">Nome ModeloCarro</p>
            <p className="mb-1">Placa carro</p>
            <p className="mb-0">Data</p>
            <p>00/00/0000</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="col-10 col-md-8 my-2">
          <div className="border rounded p-3 text-center bg-light">
            <p className="mb-1">Nome ModeloCarro</p>
            <p className="mb-1">Placa carro</p>
            <p className="mb-0">Data</p>
            <p>00/00/0000</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-10 col-md-8 my-2">
          <div className="border rounded p-3 text-center bg-light">
            <p className="mb-1">Nome ModeloCarro</p>
            <p className="mb-1">Placa carro</p>
            <p className="mb-0">Data</p>
            <p>00/00/0000</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-10 col-md-8 my-2">
          <div className="border rounded p-3 text-center bg-light">
            <p className="mb-1">Nome ModeloCarro</p>
            <p className="mb-1">Placa carro</p>
            <p className="mb-0">Data</p>
            <p>00/00/0000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carropatio;
