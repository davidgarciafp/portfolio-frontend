import { useState } from "react";
import { createProject } from "../services/projectService";

function ProjectForm({ onProjectCreated }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!projectName.trim()) newErrors.projectName = "El nombre es obligatorio.";
    if (!description.trim()) newErrors.description = "La descripción es obligatoria.";
    if (!technologies.trim()) newErrors.technologies = "Debes incluir al menos una tecnología.";

    const urlRegex = /^https?:\/\/.+/i;
    if (!urlRegex.test(url)) newErrors.url = "La URL del proyecto no es válida.";
    if (!urlRegex.test(imageUrl)) newErrors.imageUrl = "La URL de la imagen no es válida.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const newProject = {
      name: projectName,
      description,
      technologies: technologies.split(",").map(t => t.trim()),
      url,
      imageUrl,
    };

    try {
      const savedProject = await createProject(newProject);
      onProjectCreated(savedProject);
      setSuccessMessage("✅ Proyecto creado correctamente.");

      // limpiar formulario
      setProjectName("");
      setDescription("");
      setTechnologies("");
      setUrl("");
      setImageUrl("");
      setErrors({});
    } catch (error) {
      setErrorMessage("❌ Error al crear el proyecto.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div>
        <input
          type="text"
          placeholder="Nombre del proyecto"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.projectName && <p className="text-red-500 text-sm mt-1">{errors.projectName}</p>}
      </div>

      <div>
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Tecnologías (separadas por comas)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.technologies && <p className="text-red-500 text-sm mt-1">{errors.technologies}</p>}
      </div>

      <div>
        <input
          type="url"
          placeholder="URL del proyecto"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.url && <p className="text-red-500 text-sm mt-1">{errors.url}</p>}
      </div>

      <div>
        <input
          type="url"
          placeholder="URL de la imagen"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
      </div>

      <div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Crear proyecto"}
        </button>
      </div>

      {successMessage && <p className="text-green-600 text-center font-medium">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 text-center font-medium">{errorMessage}</p>}
    </form>
  );
}

export default ProjectForm;
