import { useEffect, useState } from "react";
import { getProjects } from "./services/projectService";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleProjectCreated = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mis Proyectos</h1>
      <ProjectForm onProjectCreated={handleProjectCreated} />
      {projects.length === 0 ? (
        <p>No hay proyectos todavía</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
              <br />
              <img src={project.imageUrl} alt={project.name} style={{ maxWidth: "300px" }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

