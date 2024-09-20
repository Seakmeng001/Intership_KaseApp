import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContextProvider';

const ProtectRouteRegister: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isRegistered } = useUserContext();

  if (!isRegistered) {
    // Redirect to registration page if not registered
    return <Navigate to="/register" />;
  }

  // Render the component if registered
  return <>{children}</>;
};

export default ProtectRouteRegister;
