import React, { useContext } from 'react';
import DoctorRegistration from './DoctorRegistration';
import DoctorsContext from './DoctorsContext';

function Doctor() {
  const { addDoctor } = useContext(DoctorsContext);

  return (
    <div className="container2">
      <DoctorRegistration onRegister={addDoctor} />
    </div>
  );
}

export default Doctor;
