const API_URL = process.env.REACT_APP_API_URL;

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
    
    return await response.json();
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
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
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
    console.log('Creando proyecto con datos:', projectData);
    
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
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
    console.log(`Actualizando proyecto ${id} con datos:`, projectData);
    
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    
    if (!response.ok) {
      // Intentar obtener el mensaje de error del servidor
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }
    
    const updatedProject = await response.json();
    console.log('Proyecto actualizado:', updatedProject);
    return updatedProject;
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
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
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error deleting project with ID ${id}:`, error);
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

