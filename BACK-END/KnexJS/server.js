import express from "express";
import bodyParser from "body-parser";
import knex from "knex"; // Agregamos Knex

const port = process.env.PORT || 8010;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Ruta GET para obtener todos los todos
app.get("/todos", async (req, res) => {
  try {
    // Utiliza Knex para obtener todos los registros de la tabla "todos"
    const todos = await db("todos").select("*");
    // Envía los resultados como respuesta
    res.json(todos);
  } catch (error) {
    // Manejo de errores
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Error fetching todos" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
