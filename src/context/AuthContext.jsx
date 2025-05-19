import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const config = {
          headers: {
            'x-auth-token': token
          }
        };

        const response = await axios.get('/api/auth/verify', config);
        
        if (response.data.success) {
          setCurrentAdmin(response.data.admin);
        } else {
          // Token inválido
          localStorage.removeItem('authToken');
          setToken(null);
          setCurrentAdmin(null);
        }
      } catch (error) {
        console.error('Error verificando token:', error);
        localStorage.removeItem('authToken');
        setToken(null);
        setCurrentAdmin(null);
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [token]);

  // Función para iniciar sesión
  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      
      if (response.data.success) {
        const { token, admin } = response.data;
        
        // Guardar token en localStorage
        localStorage.setItem('authToken', token);
        
        // Actualizar estado
        setToken(token);
        setCurrentAdmin(admin);
        
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error en login:', error);
      return false;
    }
  };

  // Función para inicializar el usuario admin por defecto
  const initAdmin = async () => {
    try {
      const response = await axios.post('/api/auth/init');
      return {
        success: true,
        message: response.data.message
      };
    } catch (error) {
      console.error('Error al inicializar admin:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Error al inicializar el usuario administrador'
      };
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    setCurrentAdmin(null);
  };

  const value = {
    currentAdmin,
    token,
    isAuthenticated: !!currentAdmin,
    isLoading,
    login,
    logout,
    initAdmin
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
