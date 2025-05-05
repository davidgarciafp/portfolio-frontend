import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProjects } from "./services/projectService";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ProjectForm from "./components/ProjectForm";
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

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
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
                <ProjectForm onProjectCreated={handleProjectCreated} />
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Proyectos Existentes</h2>
                  {projects.length === 0 ? (
                    <p>No hay proyectos todavía</p>
                  ) : (
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((project) => (
                        <li key={project._id} className="bg-white p-4 rounded-lg shadow">
                          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                          <p className="text-gray-600 mb-2">{project.description}</p>
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ver proyecto</a>
                          <div className="mt-2">
                            {project.imageUrl && (
                              <img src={project.imageUrl} alt={project.name} className="mt-2 max-w-full h-auto rounded" style={{ maxHeight: "150px" }} />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

