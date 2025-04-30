const API_URL = process.env.REACT_APP_API_URL || "https://portfolio-backend-production-4cd3.up.railway.app/api";

/**
 * Obtiene todos los proyectos desde la API
 * @returns {Promise<Array>} Lista de proyectos
 */
export const getProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/projects`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
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
    const response = await fetch(`${API_URL}/projects/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
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
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
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
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
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
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
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

