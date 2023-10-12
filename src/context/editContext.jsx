import React, { createContext, useContext, useState } from "react";

const EditContext = createContext();

const AuthProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  // const changeModal = (showModal) => {
  //   if (showModal === false) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };
  return (
    <EditContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </EditContext.Provider>
  );
};

export { AuthProvider, EditContext };