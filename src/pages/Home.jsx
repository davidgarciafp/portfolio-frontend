import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
                <i className="fab fa-react"></i>
              </div>
              <h3 className="font-medium text-lg">React</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 text-4xl mb-3">
                <i className="fab fa-node-js"></i>
              </div>
              <h3 className="font-medium text-lg">Node.js</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-500 text-4xl mb-3">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="font-medium text-lg">MongoDB</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-400 text-4xl mb-3">
                <i className="fab fa-css3-alt"></i>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/project1.jpg" 
                alt="Proyecto 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce App</h3>
                <p className="text-gray-600 mb-4">
                  Una aplicación de comercio electrónico completa con carrito de compras,
                  pagos y panel de administración.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">MongoDB</span>
                </div>
                <Link 
                  to="/projects/1" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/project2.jpg" 
                alt="Proyecto 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Manager</h3>
                <p className="text-gray-600 mb-4">
                  Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar,
                  etiquetas y colaboración en tiempo real.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Redux</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Express</span>
                </div>
                <Link 
                  to="/projects/2" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/project3.jpg" 
                alt="Proyecto 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Platform</h3>
                <p className="text-gray-600 mb-4">
                  Plataforma de blog con editor de texto enriquecido, categorías,
                  comentarios y sistema de autenticación.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">GraphQL</span>
                </div>
                <Link 
                  to="/projects/3" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
          </div>
          
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
    </div>
  );
};

export default Home;