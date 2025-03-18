"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, LayoutGrid, Folder, Clock, BarChart, MessageCircle, Settings } from "lucide-react";

const sidebarItems = [
  { label: "Inicio", path: "/dashboard", icon: <Home size={20} /> },
  { label: "Tablero", path: "/tablero", icon: <LayoutGrid size={20} /> },
  { label: "Proyectos", path: "/proyectos", icon: <Folder size={20} /> },
  { label: "Asistencia", path: "/asistencia", icon: <Clock size={20} /> },
  { label: "Reportes", path: "/reportes", icon: <BarChart size={20} /> },
  { label: "Chat", path: "/chat", icon: <MessageCircle size={20} /> },
  { label: "Configuración", path: "/configuracion", icon: <Settings size={20} /> }
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white p-4 shadow-md flex flex-col h-screen">
      <h2 className="text-xl font-bold mb-4">JiraTrack</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li
              key={item.label}
              onClick={() => router.push(item.path)}
              className={`flex items-center gap-2 p-3 rounded cursor-pointer transition ${
                pathname === item.path ? "bg-blue-500 text-white" : "hover:bg-blue-100"
              }`}
            >
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
