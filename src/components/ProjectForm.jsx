import React, { useState } from 'react';
import { createProject } from '../services/projectService';

const ProjectForm = ({ onProjectCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    technologies: '',
    url: '',
    imageUrl: '',
    github: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }
    
    if (!formData.technologies.trim()) {
      newErrors.technologies = 'Las tecnologías son obligatorias';
    }
    
    if (formData.url && !/^https?:\/\/.+/i.test(formData.url)) {
      newErrors.url = 'La URL debe comenzar con http:// o https://';
    }
    
    if (formData.imageUrl && !/^https?:\/\/.+/i.test(formData.imageUrl)) {
      newErrors.imageUrl = 'La URL de la imagen debe comenzar con http:// o https://';
    }
    
    if (formData.github && !/^https?:\/\/.+/i.test(formData.github)) {
      newErrors.github = 'La URL de GitHub debe comenzar con http:// o https://';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Convertir el string de tecnologías a un array
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(tech => tech.trim())
      };
      
      const savedProject = await createProject(projectData);
      
      setSubmitStatus({
        success: true,
        message: 'Proyecto creado correctamente'
      });
      
      // Notificar al componente padre
      if (onProjectCreated) {
        onProjectCreated(savedProject);
      }
      
      // Limpiar el formulario
      setFormData({
        name: '',
        description: '',
        technologies: '',
        url: '',
        imageUrl: '',
        github: ''
      });
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      setSubmitStatus({
        success: false,
        message: 'Error al crear el proyecto. Por favor, intenta de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Crear Nuevo Proyecto</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre del Proyecto *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Nombre del proyecto"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          
          <div className="col-span-1">
            <label htmlFor="technologies" className="block text-gray-700 font-medium mb-2">
              Tecnologías *
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.technologies ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="React, Node.js, MongoDB, etc. (separadas por comas)"
            />
            {errors.technologies && <p className="text-red-500 text-sm mt-1">{errors.technologies}</p>}
          </div>
          
          <div className="col-span-2">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Descripción *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Descripción del proyecto"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          
          <div className="col-span-1">
            <label htmlFor="url" className="block text-gray-700 font-medium mb-2">
              URL del Proyecto
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.url ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="https://ejemplo.com"
            />
            {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url}</p>}
          </div>
          
          <div className="col-span-1">
            <label htmlFor="github" className="block text-gray-700 font-medium mb-2">
              URL de GitHub
            </label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.github ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="https://github.com/usuario/proyecto"
            />
            {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github}</p>}
          </div>
          
          <div className="col-span-2">
            <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
              URL de la Imagen
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.imageUrl ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
            
            {formData.imageUrl && (
              <div className="mt-2">
                <p className="text-sm text-gray-600 mb-1">Vista previa:</p>
                <img 
                  src={formData.imageUrl} 
                  alt="Vista previa" 
                  className="max-h-40 rounded border border-gray-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Error+de+imagen';
                  }}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creando...
              </>
            ) : (
              'Crear Proyecto'
            )}
          </button>
        </div>
        
        {submitStatus && (
          <div className={`mt-4 p-3 rounded-lg ${
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ProjectForm;