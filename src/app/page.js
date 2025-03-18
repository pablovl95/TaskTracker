"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("Para ti");
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Prácticas 2025",
      issues: [
        { id: "P2-1", title: "Login", status: "Creado" },
        { id: "P2-2", title: "Register", status: "Creado" }
      ]
    }
  ]);

  const sidebarItems = [
    { label: "Para ti" },
    { label: "Recientes" },
    { label: "Proyectos" },
    { label: "Asistencia" },
    { label: "Chat" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Jira Clone</h2>
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li
                key={item.label}
                onClick={() => setActiveSection(item.label)}
                className={`p-2 rounded cursor-pointer ${
                  activeSection === item.label ? "bg-blue-100" : ""
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeSection === "Para ti" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Para ti</h1>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Proyectos Recientes</h2>
              {projects.map((project) => (
                <div key={project.id} className="p-3 border rounded mb-2">
                  <h3 className="font-semibold">{project.name}</h3>
                  <ul>
                    {project.issues.map((issue) => (
                      <li key={issue.id} className="flex justify-between">
                        <span>{issue.title}</span>
                        <span className="text-gray-500">{issue.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
        {activeSection === "Recientes" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Recientes</h1>
            <div className="bg-white p-4 shadow-md rounded-md">
              <p>Contenido para la sección de Recientes.</p>
            </div>
          </>
        )}
        {activeSection === "Proyectos" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Proyectos</h1>
            <div className="bg-white p-4 shadow-md rounded-md">
              <p>Contenido para la sección de Proyectos.</p>
            </div>
          </>
        )}
        {activeSection === "Asistencia" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Asistencia</h1>
            <div className="bg-white p-4 shadow-md rounded-md">
              <p>Contenido para la sección de Asistencia.</p>
            </div>
          </>
        )}
        {activeSection === "Chat" && (
          <>
            <h1 className="text-2xl font-bold mb-4">Chat</h1>
            <div className="bg-white p-4 shadow-md rounded-md">
              <p>Contenido para la sección de Chat.</p>
            </div>
          </>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-72 bg-white p-4 shadow-md">
        {/* Sección de Usuario y Configuración */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Cuenta</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => router.push("/usuario")}
                className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded"
              >
                Usuario
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push("/configuracion")}
                className="w-full text-left bg-blue-500 text-white px-4 py-2 rounded"
              >
                Configuración
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
