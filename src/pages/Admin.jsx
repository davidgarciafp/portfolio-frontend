import React, { useState, useEffect } from 'react';
import { getProjects, deleteProject } from '../services/projectService';
import ProjectForm from '../components/ProjectForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // Determinar si estamos en el subdominio de administración
  const isAdminDomain = window.location.hostname.startsWith('admin.');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    fetchProjects();
  }, [isAuthenticated, navigate]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Error al cargar los proyectos. Por favor, intenta de nuevo más tarde.');
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectCreated = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const handleEdit = (projectId) => {
    // Redirigir a la página de edición según el subdominio
    if (isAdminDomain) {
      navigate(`/projects/edit/${projectId}`);
    } else {
      navigate(`/admin/projects/edit/${projectId}`);
    }
  };

  const confirmDelete = (project) => {
    setProjectToDelete(project);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!projectToDelete) return;
    
    try {
      await deleteProject(projectToDelete._id);
      setProjects(projects.filter(project => project._id !== projectToDelete._id));
      setShowDeleteModal(false);
      setProjectToDelete(null);
    } catch (error) {
      console.error('Error deleting project:', error);
      setError('Error al eliminar el proyecto. Por favor, intenta de nuevo más tarde.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Crear Nuevo Proyecto</h2>
        <ProjectForm onProjectCreated={handleProjectCreated} />
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Proyectos Existentes</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={fetchProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Reintentar
            </button>
          </div>
        ) : projects.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No hay proyectos todavía. Crea tu primer proyecto usando el formulario de arriba.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="bg-white p-4 rounded-lg shadow relative">
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button
                    onClick={() => handleEdit(project._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                    title="Editar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => confirmDelete(project)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                    title="Eliminar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-xl font-bold mb-2 pr-16">{project.name}</h3>
                <p className="text-gray-600 mb-2 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies && project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.imageUrl && (
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="mt-2 w-full h-40 object-cover rounded" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x200?text=Error+de+imagen';
                    }}
                  />
                )}
                
                {project.url && (
                  <div className="mt-3">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                      </svg>
                      Ver proyecto
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Modal de confirmación para eliminar */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirmar eliminación</h3>
            <p className="mb-6">
              ¿Estás seguro de que quieres eliminar el proyecto "{projectToDelete?.name}"? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
