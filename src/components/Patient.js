import React, { useContext } from 'react';
import DoctorsContext from './DoctorsContext';
import healthIcon from '../assets/icons8-médico-50 (1).png'; // Substitua pelo caminho real do ícone de saúde

function Patient() {
  const { doctors } = useContext(DoctorsContext);

  return (
    <div className="container22">
      {doctors.map((doctor, index) => (
        <div className="card22" key={index}>
          <img src={doctor.profileImg} alt="Foto de perfil" className="profile-img" />
          <div className="container-text2">
            <h1 className="name">
              <img src={healthIcon} alt="Ícone de saúde" className="health-icon" /> {doctor.name}, {doctor.age}
            </h1>
            <h3 className="desc">{doctor.specialty}</h3>
            <button className="mark-consultation" onClick={() => window.location.href = 'https://www.google.com'}>Marcar Consulta</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Patient;
