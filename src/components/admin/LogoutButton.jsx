import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LogoutButton.css';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirigir al inicio después de cerrar sesión
  };

  return (
    <button 
      className="logout-button" 
      onClick={handleLogout}
      aria-label="Cerrar sesión"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;