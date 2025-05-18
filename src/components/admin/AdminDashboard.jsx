import React from 'react';
import AdminHeader from './AdminHeader';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminHeader />
      <main className="admin-content">
        <div className="admin-welcome">
          <h2>Bienvenido al Panel de Administración</h2>
          <p>Desde aquí puedes gestionar el contenido de tu sitio web.</p>
        </div>
        
        <div className="admin-widgets">
          <div className="admin-widget">
            <h3>Proyectos</h3>
            <p>Gestiona tus proyectos y portafolio.</p>
            <div className="widget-stats">
              <span className="stat">5 proyectos</span>
            </div>
          </div>
          
          <div className="admin-widget">
            <h3>Mensajes</h3>
            <p>Revisa los mensajes de contacto recibidos.</p>
            <div className="widget-stats">
              <span className="stat">2 nuevos mensajes</span>
            </div>
          </div>
          
          <div className="admin-widget">
            <h3>Visitas</h3>
            <p>Estadísticas de visitas a tu sitio.</p>
            <div className="widget-stats">
              <span className="stat">128 visitas este mes</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;