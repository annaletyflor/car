import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carro.css";
import Carro1 from "../../assets/Carro1.svg"
import random from "../../assets/random.svg"

const CarForm = () => {
  return (
    <div className="container my-5">
      {/* Seção do carro */}
      <div className="row">
        <div className="col-12 col-md-6 text-center">
          <img src={Carro1} alt="Toro 4x4" className="img-fluid mb-3" />
          <h5>Descrição bacana do carro</h5>
          <p>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </p>
        </div>

        {/* Informações do carro */}
        <div className="col-12 col-md-6">
          <div className="card p-4">
            <h2 className="card-title">Toro 4x4</h2>
            <ul className="list-unstyled">
              <li>🚗 5 Passageiros</li>
              <li>❄️ Ar condicionado</li>
              <li>🔧 Direção Hidráulica</li>
              <li>🚪 4 Portas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Formulário de contato */}
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome inteiro</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">CPF</label>
              <input type="text" className="form-control" id="cpf" placeholder="000.000.000-00" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Telefone</label>
              <input type="text" className="form-control" id="phone" placeholder="(55) 00 0000-0000" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="emailbacana@gmail.com" />
            </div>
          </form>
        </div>

        {/* Avatar e botão */}
        <div className="col-12 col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
          <div className="avatar mb-3">
            <img src={random} alt="Perfil" className="img-fluid rounded-circle" />
          </div>
          <button className="btn btn-primary">Pagar agora</button>
        </div>
      </div>
    </div>
  );
};

export default CarForm;
