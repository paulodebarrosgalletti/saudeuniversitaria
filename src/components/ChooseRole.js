import React from 'react';
import { useNavigate } from 'react-router-dom';

function ChooseRole() {
  const navigate = useNavigate();

  const handlePatientClick = () => {
    navigate('/patient');
  };

  const handleDoctorClick = () => {
    navigate('/doctor');
  };

  return (
    <div className="choose-role">
      <h2>Você é paciente ou médico?</h2>
      <button onClick={handlePatientClick}>Paciente</button>
      <button onClick={handleDoctorClick}>Médico</button>
    </div>
  );
}

export default ChooseRole;
