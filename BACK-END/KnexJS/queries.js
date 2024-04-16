// queries.js

import knex from "knex";
import { knexConfig } from "./knexfile.js";

// Create a Knex instance
const db = knex(knexConfig["development"]);



// Function to get all todos
export async function getAllTodos() {
  try {
    const todos = await db("todos").select("*");
    return todos;
  } catch (error) {
    throw new Error("Error fetching todos:", error);
  }
}

// Function to get a specific todo by its id
export async function getTodoById(id) {
  try {
    const todo = await db("todos").select("*").where("id", id);
    return todo;
  } catch (error) {
    throw new Error("Error fetching todo:", error);
  }
}




// Add other query functions as needed
