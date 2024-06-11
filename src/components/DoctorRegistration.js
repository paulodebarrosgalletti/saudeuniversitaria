import React, { useState } from 'react';

function DoctorRegistration({ onRegister }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [profileImg, setProfileImg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!profileImg) {
      alert('Por favor, faça o upload de uma imagem de perfil.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newDoctor = {
        name,
        age,
        specialty,
        profileImg: reader.result, // Armazena a imagem como base64
      };
      onRegister(newDoctor);
      setName('');
      setAge('');
      setSpecialty('');
      setProfileImg(null);
    };
    reader.readAsDataURL(profileImg);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(file);
    } else {
      setProfileImg(null);
    }
  };

  return (
    <form className="doctor-registration-form" onSubmit={handleSubmit}>
      <h2>Cadastro de Médico</h2>
      <div className="doctor-registration-input-group">
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="doctor-registration-input-group">
        <label>Idade</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="doctor-registration-input-group">
        <label>Especialidade</label>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </div>
      <div className="doctor-registration-input-group">
        <label>Foto de Perfil</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default DoctorRegistration;
