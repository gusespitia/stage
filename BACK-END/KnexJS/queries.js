// queries.js

import knex from "knex";
import { knexConfig } from "./knexfile.js";

// Create a Knex instance
const db = knex(knexConfig["development"]);

// Function to get all todos
export async function getAllTodos() {
  try {
    const todos = await db("todos").select("*").orderBy("id", "desc");
    return todos;
  } catch (error) {
    throw new Error("Error fetching todos:", error);
  }
}
