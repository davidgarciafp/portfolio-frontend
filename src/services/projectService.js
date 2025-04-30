const API_URL = "https://portfolio-backend-production-4cd3.up.railway.app/api/projects";

export async function getProjects() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al cargar los proyectos");
  }
  return await response.json();
}

export async function createProject(projectData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
  if (!response.ok) {
    throw new Error("Error al crear el proyecto");
  }
  return await response.json();
}

