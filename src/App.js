import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProjects } from "./services/projectService";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './components/admin/Admin';
import EditProject from './components/admin/EditProject';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  // Determine if we're on the admin subdomain
  const isAdminDomain = window.location.hostname.startsWith('admin.');
  
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Only show Header on public site */}
          {!isAdminDomain && <Header />}
          
          <main className="flex-grow">
            <Routes>
              {isAdminDomain ? (
                // Routes for admin subdomain
                <>
                  <Route path="/" element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  } />
                  <Route path="/projects/edit/:id" element={
                    <ProtectedRoute>
                      <EditProject />
                    </ProtectedRoute>
                  } />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              ) : (
                // Routes for public site
                <>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  } />
                  <Route path="/admin/projects/edit/:id" element={
                    <ProtectedRoute>
                      <EditProject />
                    </ProtectedRoute>
                  } />
                  <Route path="*" element={<Navigate to="/" />} />
                </>
              )}
            </Routes>
          </main>
          
          {/* Only show Footer on public site */}
          {!isAdminDomain && <Footer />}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

