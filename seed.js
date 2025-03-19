import mongoose from "mongoose";
import Project from "./src/models/Project.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); // Asegura que .env.local se cargue

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ ERROR: No se encontró la variable MONGODB_URI en .env.local");
  process.exit(1);
}

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, { dbName: "jira_clone" });

    const projects = [
      {
        name: "Proyecto 1",
        description: "Este es el primer proyecto de prueba",
        users: [],
      },
      {
        name: "Proyecto 2",
        description: "Este es el segundo proyecto de prueba",
        users: [],
      }
    ];

    await Project.insertMany(projects);
    console.log("✅ Datos insertados en MongoDB correctamente");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error insertando datos:", error);
    process.exit(1);
  }
}

seedDatabase();
