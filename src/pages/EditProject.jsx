import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, updateProject } from '../services/projectService';
import { useAuth } from '../context/AuthContext';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Determinar si estamos en el subdominio de administración
  const isAdminDomain = window.location.hostname.startsWith('admin.');

  useEffect(() => {
    // Verificar autenticación
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Cargar el proyecto
    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await getProjectById(id);
        setProject(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('No se pudo cargar el proyecto. Por favor, intenta de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, isAuthenticated, navigate]);

  // Estado para el formulario
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState({});

  // Cargar datos del proyecto en el formulario
  useEffect(() => {
    if (project) {
      setProjectName(project.name || "");
      setDescription(project.description || "");
      
      // Manejar technologies como array o string
      if (Array.isArray(project.technologies)) {
        setTechnologies(project.technologies.join(", "));
      } else if (typeof project.technologies === 'string') {
        setTechnologies(project.technologies);
      } else {
        setTechnologies("");
      }
      
      setUrl(project.url || "");
      setImageUrl(project.imageUrl || "");
    }
  }, [project]);

  const validateForm = () => {
    const newErrors = {};

    if (!projectName.trim()) newErrors.projectName = "El nombre es obligatorio.";
    if (!description.trim()) newErrors.description = "La descripción es obligatoria.";
    if (!technologies.trim()) newErrors.technologies = "Debes incluir al menos una tecnología.";

    // Validación opcional para URLs
    if (url && !/^https?:\/\/.+/i.test(url)) {
      newErrors.url = "La URL del proyecto no es válida.";
    }
    if (imageUrl && !/^https?:\/\/.+/i.test(imageUrl)) {
      newErrors.imageUrl = "La URL de la imagen no es válida.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Actualizar el estado correspondiente según el nombre del campo
    switch (name) {
      case 'projectName':
        setProjectName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'technologies':
        setTechnologies(value);
        break;
      case 'url':
        setUrl(value);
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;
      default:
        break;
    }
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Convertir technologies de string a array
    const techArray = technologies.split(",").map(t => t.trim()).filter(t => t);

    const projectData = {
      name: projectName,
      description,
      technologies: techArray,
      url,
      imageUrl,
    };

    try {
      console.log(`Actualizando proyecto con ID: ${id}`);
      const updatedProject = await updateProject(id, projectData);
      console.log("Proyecto actualizado:", updatedProject);
      
      setSuccessMessage("✅ Proyecto actualizado correctamente.");
      
      // Redirigir al panel de administración después de actualizar
      setTimeout(() => {
        // Redirigir según el subdominio
        if (isAdminDomain) {
          navigate('/');
        } else {
          navigate('/admin');
        }
      }, 2000); // Esperar 2 segundos para que el usuario vea el mensaje de éxito
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(`❌ Error al actualizar el proyecto: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    // Redirigir según el subdominio
    if (isAdminDomain) {
      navigate('/');
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <button
          onClick={handleGoBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg mr-4 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </button>
        <h1 className="text-3xl font-bold">Editar Proyecto</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 text-red-800 p-4 rounded-lg">
          <p>{error}</p>
          <button
            onClick={handleGoBack}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Volver al panel de administración
          </button>
        </div>
      ) : project ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="projectName" className="block text-gray-700 font-medium mb-2">
                Nombre del proyecto *
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={projectName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.projectName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Nombre del proyecto"
              />
              {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Descripción *
              </label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } h-32`}
                placeholder="Descripción del proyecto"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <div>
              <label htmlFor="technologies" className="block text-gray-700 font-medium mb-2">
                Tecnologías * (separadas por comas)
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                value={technologies}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.technologies ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="React, Node.js, MongoDB, etc."
              />
              {errors.technologies && <p className="text-red-500 text-sm mt-1">{errors.technologies}</p>}
            </div>

            <div>
              <label htmlFor="url" className="block text-gray-700 font-medium mb-2">
                URL del proyecto
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={url}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.url ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="https://ejemplo.com"
              />
              {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url}</p>}
            </div>


            <div>
              <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
                URL de la imagen
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.imageUrl ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
              {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
            </div>

            {imageUrl && (
              <div className="mt-2">
                <p className="text-gray-700 font-medium mb-2">Vista previa de la imagen:</p>
                <img
                  src={imageUrl}
                  alt="Vista previa"
                  className="max-w-full h-auto rounded-md border border-gray-300"
                  style={{ maxHeight: "200px" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200?text=Error+de+imagen";
                  }}
                />
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Guardando..." : "Actualizar proyecto"}
              </button>
            </div>

            {successMessage && <p className="text-green-600 text-center font-medium">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 text-center font-medium">{errorMessage}</p>}
          </form>
        </div>
      ) : (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
          <p>No se encontró el proyecto.</p>
          <button
            onClick={handleGoBack}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            Volver al panel de administración
          </button>
        </div>
      )}
    </div>
  );
};

export default EditProject;
