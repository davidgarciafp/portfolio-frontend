const API_URL = process.env.REACT_APP_API_URL || 'https://portfolio-backend-production-4cd3.up.railway.app/api';

/**
 * Obtiene todos los proyectos desde la API
 * @returns {Promise<Array>} Lista de proyectos
 */
export const getProjects = async () => {
  try {
    console.log('Fetching projects from:', `${API_URL}/projects`);
    const response = await fetch(`${API_URL}/projects`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Projects fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Obtiene un proyecto específico por su ID
 * @param {string} id - ID del proyecto
 * @returns {Promise<Object>} Datos del proyecto
 */
export const getProjectById = async (id) => {
  try {
    console.log(`Fetching project with ID ${id} from:`, `${API_URL}/projects/${id}`);
    const response = await fetch(`${API_URL}/projects/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Project fetched:', data);
    return data;
  } catch (error) {
    console.error(`Error fetching project with id ${id}:`, error);
    throw error;
  }
};

/**
 * Crea un nuevo proyecto
 * @param {Object} projectData - Datos del proyecto a crear
 * @returns {Promise<Object>} Proyecto creado
 */
export const createProject = async (projectData) => {
  try {
    console.log('Creating project with data:', projectData);
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Aquí podrías añadir headers de autenticación si es necesario
      },
      body: JSON.stringify(projectData),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Project created:', data);
    return data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

/**
 * Actualiza un proyecto existente
 * @param {string} id - ID del proyecto a actualizar
 * @param {Object} projectData - Nuevos datos del proyecto
 * @returns {Promise<Object>} Proyecto actualizado
 */
export const updateProject = async (id, projectData) => {
  try {
    console.log(`Updating project with ID ${id} with data:`, projectData);
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Aquí podrías añadir headers de autenticación si es necesario
      },
      body: JSON.stringify(projectData),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Project updated:', data);
    return data;
  } catch (error) {
    console.error(`Error updating project with id ${id}:`, error);
    throw error;
  }
};

/**
 * Elimina un proyecto
 * @param {string} id - ID del proyecto a eliminar
 * @returns {Promise<Object>} Respuesta de la API
 */
export const deleteProject = async (id) => {
  try {
    console.log(`Deleting project with ID ${id}`);
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        // Aquí podrías añadir headers de autenticación si es necesario
      },
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Project deleted:', data);
    return data;
  } catch (error) {
    console.error(`Error deleting project with id ${id}:`, error);
    throw error;
  }
};

export default {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};

