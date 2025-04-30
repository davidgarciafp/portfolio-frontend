import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../services/projectService';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        // Mostrar solo los 3 primeros proyectos como destacados
        setFeaturedProjects(data.slice(0, 3));
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('No se pudieron cargar los proyectos destacados.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hola, soy <span className="text-yellow-300">Tu Nombre</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Desarrollador Web Full Stack</h2>
            <p className="text-lg mb-8">
              Especializado en crear aplicaciones web modernas y responsivas
              utilizando las últimas tecnologías como React, Node.js y MongoDB.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/projects" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
              >
                Ver Proyectos
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-blue-500 text-white border border-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
              >
                Contactar
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/profile-image.png" 
              alt="Tu Nombre" 
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x300?text=Tu+Foto';
              }}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mis Habilidades</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-500 text-4xl mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm2.563 18.561a.6.6 0 01-.427.177.6.6 0 01-.427-.177l-5.84-5.839a.6.6 0 010-.854l5.84-5.84a.6.6 0 01.854 0 .6.6 0 010 .854L9.177 12l5.386 5.383a.6.6 0 01.177.427.6.6 0 01-.177.427z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">React</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 text-4xl mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.998 0a12 12 0 00-3.804 23.387c.6.113.82-.258.82-.577l-.012-2.045c-3.338.711-4.043-1.409-4.043-1.409a3.127 3.127 0 00-1.32-1.727c-1.08-.726.084-.711.084-.711a2.52 2.52 0 011.831 1.218 2.58 2.58 0 003.495.996 2.513 2.513 0 01.764-1.598c-2.665-.295-5.466-1.32-5.466-5.874a4.543 4.543 0 011.225-3.173 4.216 4.216 0 01.121-3.12s.996-.318 3.258 1.203a11.318 11.318 0 015.995 0c2.262-1.521 3.258-1.203 3.258-1.203a4.216 4.216 0 01.121 3.12 4.543 4.543 0 011.225 3.173c0 4.554-2.805 5.579-5.478 5.874a2.837 2.837 0 01.811 2.202c0 1.598-.012 2.886-.012 3.279 0 .319.213.69.825.577A12 12 0 0011.998 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">Node.js</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">MongoDB</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-400 text-4xl mb-3">
                <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Proyectos Destacados</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Estos son algunos de mis proyectos más recientes. Utilizo las últimas tecnologías
            para crear soluciones eficientes y escalables.
          </p>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Reintentar
              </button>
            </div>
          ) : featuredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No hay proyectos destacados disponibles.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div key={project._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={project.imageUrl || '/placeholder-project.jpg'} 
                    alt={project.name} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-project.jpg';
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/projects/${project._id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ver detalles →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-10">
            <Link 
              to="/projects" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="/about-image.jpg" 
                alt="Sobre mí" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x400?text=Sobre+Mi';
                }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Soy un desarrollador web full stack apasionado por crear experiencias digitales 
                excepcionales. Con experiencia en React, Node.js y MongoDB, me especializo en 
                construir aplicaciones web modernas y responsivas.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mi enfoque se centra en escribir código limpio y mantenible, con un fuerte 
                énfasis en la experiencia del usuario y el rendimiento. Siempre estoy aprendiendo 
                nuevas tecnologías y mejorando mis habilidades.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Más sobre mí
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance y colaboraciones. 
            Contáctame para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-block"
          >
            Contáctame
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;