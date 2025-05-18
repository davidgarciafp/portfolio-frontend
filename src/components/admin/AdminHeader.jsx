import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './AdminHeader.css';

const AdminHeader = ({ title = 'Panel de Administración' }) => {
  return (
    <header className="admin-header">
      <div className="admin-header-content">
        <h1 className="admin-title">{title}</h1>
        <div className="admin-nav">
          <nav>
            <ul>
              <li><Link to="/admin">Dashboard</Link></li>
              <li><Link to="/admin/projects">Proyectos</Link></li>
              <li><Link to="/admin/settings">Configuración</Link></li>
            </ul>
          </nav>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;