import React, { createContext, useState } from 'react';

const DoctorsContext = createContext();

export const DoctorsProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  const addDoctor = (doctor) => {
    setDoctors([...doctors, doctor]);
  };

  return (
    <DoctorsContext.Provider value={{ doctors, addDoctor }}>
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsContext;
