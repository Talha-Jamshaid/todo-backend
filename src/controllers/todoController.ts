import { Router, Request, Response } from "express";
import db from "../database";

const router = Router();

/**
 * Creates a new todo item.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { task, completed } = req.body;
  const isCompleted = completed ? 1 : 0;

  try {
    // Prepare and execute the SQL statement to insert a new todo
    const stmt = db.prepare("INSERT INTO todo (task, completed) VALUES (?, ?)");
    const result = stmt.run(task, isCompleted);

    // Send a successful response with the inserted todo's ID
    res.status(200).send({
      success: true,
      message: "Todo created successfully",
      data: { id: result.lastInsertRowid, task,  completed },
    });
  } catch (error) {
    // Handle errors by sending a 400 status code
    res.status(400).send({
      success: false,
      message: "Error creating todo",
      data: false,
    });
  }
};

/**
 * Fetches all todo items.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    // Prepare and execute the SQL statement to fetch all todos
    const stmt = db.prepare("SELECT * FROM todo");
    const todos = stmt.all();

    // Send a successful response with the fetched todos
    res.status(200).send({
      success: true,
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    // Handle errors by sending a 400 status code
    res.status(400).send({
      success: false,
      message: "Error fetching todos",
      data: false,
    });
  }
};

/**
 * Updates an existing todo item.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const editTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const isCompleted = completed ? 1 : 0;

  try {
    // Prepare and execute the SQL statement to update the specified todo
    const stmt = db.prepare(
      "UPDATE todo SET task = ?, completed = ? WHERE id = ?"
    );
    const result = stmt.run(task, isCompleted, id);

    // Send a successful response with the number of rows changed
    res.status(200).send({
      success: true,
      message: "Todo updated successfully",
      data: { id: result.changes },
    });
  } catch (error) {
    // Handle errors by sending a 400 status code
    res.status(400).send({
      success: false,
      message: "Error updating todo",
      data: false,
    });
  }
};

/**
 * Deletes an existing todo item.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    // Prepare and execute the SQL statement to delete the specified todo
    const stmt = db.prepare("DELETE FROM todo WHERE id = ?");
    const result = stmt.run(id);

    // Send a successful response with the number of rows changed
    res.status(200).send({
      success: true,
      message: "Todo deleted successfully",
      data: { id: result.changes },
    });
  } catch (error) {
    // Handle errors by sending a 400 status code
    res.status(400).send({
      success: false,
      message: "Error deleting todo",
      data: false,
    });
  }
};

export default router;
