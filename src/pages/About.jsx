import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Desarrollador Full Stack apasionado por crear soluciones web innovadoras y funcionales
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Profile Image Section */}
              <div className="md:w-1/3 bg-gray-100 p-8 flex flex-col items-center justify-center">
                <img 
                  src="/profile-image.png" 
                  alt="Tu Nombre" 
                  className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu Nombre</h2>
                <p className="text-gray-600 mb-4 text-center">Desarrollador Web Full Stack</p>
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:tu@email.com" 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  Contactar
                </Link>
              </div>
              
              {/* Bio Section */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Biografía</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Soy un desarrollador web full stack con experiencia en la creación de aplicaciones web modernas y responsivas. 
                  Me especializo en el desarrollo con React para el frontend y Node.js con Express para el backend, 
                  utilizando MongoDB como base de datos principal.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mi pasión por la programación comenzó durante mis estudios universitarios, donde descubrí el poder de crear 
                  soluciones digitales que resuelven problemas reales. Desde entonces, he trabajado en diversos proyectos que 
                  me han permitido perfeccionar mis habilidades técnicas y de resolución de problemas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Me encanta aprender nuevas tecnologías y mantenerme actualizado con las últimas tendencias en desarrollo web. 
                  Actualmente estoy explorando arquitecturas serverless y mejorando mis conocimientos en DevOps para optimizar 
                  los procesos de desarrollo y despliegue.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Habilidades Técnicas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>JavaScript (ES6+)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>React.js</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Express.js</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>HTML5 & CSS3</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Git & GitHub</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>RESTful APIs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Experiencia Profesional
              </h3>
              
              <div className="mb-8 relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">Desarrollador Full Stack</h4>
                <p className="text-gray-600 mb-2">Empresa XYZ • 2021 - Presente</p>
                <p className="text-gray-700">
                  Desarrollo de aplicaciones web utilizando React, Node.js y MongoDB. 
                  Implementación de APIs RESTful y optimización de rendimiento.
                </p>
              </div>
              
              <div className="mb-8 relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">Desarrollador Frontend</h4>
                <p className="text-gray-600 mb-2">Empresa ABC • 2019 - 2021</p>
                <p className="text-gray-700">
                  Desarrollo de interfaces de usuario con React y Redux. 
                  Colaboración en equipos ágiles y mejora de la experiencia de usuario.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">Desarrollador Web Junior</h4>
                <p className="text-gray-600 mb-2">Startup DEF • 2018 - 2019</p>
                <p className="text-gray-700">
                  Desarrollo de sitios web responsivos con HTML, CSS y JavaScript.
                  Mantenimiento y actualización de sitios existentes.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Educación
              </h3>
              
              <div className="mb-8 relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">Máster en Desarrollo Web</h4>
                <p className="text-gray-600 mb-2">Universidad XYZ • 2017 - 2018</p>
                <p className="text-gray-700">
                  Especialización en tecnologías web modernas, arquitectura de aplicaciones
                  y metodologías ágiles de desarrollo.
                </p>
              </div>
              
              <div className="mb-8 relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">Grado en Ingeniería Informática</h4>
                <p className="text-gray-600 mb-2">Universidad ABC • 2013 - 2017</p>
                <p className="text-gray-700">
                  Fundamentos de programación, estructuras de datos, algoritmos,
                  bases de datos y desarrollo de software.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Certificaciones
              </h3>
              
              <div className="mb-4 relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">MongoDB Certified Developer</h4>
                <p className="text-gray-600">MongoDB University • 2020</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <h4 className="text-xl font-bold text-gray-800">AWS Certified Developer</h4>
                <p className="text-gray-600">Amazon Web Services • 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Interesado en trabajar juntos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estoy abierto a oportunidades de trabajo freelance y colaboraciones en proyectos interesantes.
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

export default About;