// src/components/PatioList.jsx

import React from 'react';
import './Patio.css'; // Estilos adicionais específicos


const patios = [
  {
    cidade: 'São Paulo',
    local: 'Rua Castello Chris',
    bairro: 'Nerfation',
    tipo: 'Pátio teto fechado',
    img: '/src/assets/sao-paulo.svg', // Substitua pelo caminho da imagem correta
    corSinal: 'red',
  },
  {
    cidade: 'Jaú',
    local: 'Rua Anna',
    bairro: 'Anda & Bate',
    tipo: 'Pátio céu aberto',
    img: '/src/assets/jau.svg', // Substitua pelo caminho da imagem correta
    corSinal: 'green',
  },
  {
    cidade: 'Bauru',
    local: 'Rua VitoPietro',
    bairro: 'Tiktok tutorial',
    tipo: 'Pátio céu aberto',
    img: '/src/assets/bauru.svg', // Substitua pelo caminho da imagem correta
    corSinal: 'yellow',
  },
];

const Patio = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Alugue o seu carro! <br /> PATIOS</h1>
      <div className="row">
        {patios.map((patio, index) => (
          <div key={index} className="col-12 mb-4">
            <div className="row align-items-center">
              <div className="iiii col-md-4">
                <img src={patio.img} className="img-fluid rounded" alt={patio.cidade} />
              </div>
              <div className="iiii col-md-4 d-flex align-items-center">
                <div className={`sinal ${patio.corSinal}`}></div>
                <h2 className="ms-3">{patio.cidade}</h2>
              </div>
              <div className="iiii col-md-4">
                <p>
                  <strong>Local:</strong> {patio.local} <br />
                  <strong>Bairro:</strong> {patio.bairro} <br />
                  {patio.tipo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patio;
