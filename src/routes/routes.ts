import { Application, Request, Response } from "express";
import { generateToken } from "../controllers/userController";
import {
  createTodo,
  deleteTodo,
  getTodos,
  editTodo,
} from "../controllers/todoController";
import { verifyToken } from "../middleware/verifyRequest";
import { validateTodo } from "../middleware/validateTodo";
import { isAuthenticated } from "../config/passport";

/**
 * Defines the application routes for the Express application.
 *
 * @param {Application} app - The Express application instance.
 * @returns {void}
 */
const routes = (app: Application): void => {
  /**
   * Route to generate a token.
   *
   * @name POST /generateToken
   * @function
   * @memberof module:routes
   * @param {Request} req - The Express Request object for generating a token.
   * @param {Response} res - The Express Response object for sending the token.
   * @returns {void}
   */
  app.post("/generateToken", generateToken);
  

  /**
   * Route to create a new todo item.
   *
   * @name POST /todos
   * @function
   * @memberof module:routes
   * @param {Request} req - The Express Request object containing the todo details.
   * @param {Response} res - The Express Response object for sending the result of the creation.
   * @returns {void}
   */
  app.post("/todos", isAuthenticated, validateTodo, createTodo);

  /**
   * Route to fetch all todo items.
   *
   * @name GET /todos
   * @function
   * @memberof module:routes
   * @param {Request} req - The Express Request object for fetching todos.
   * @param {Response} res - The Express Response object containing the list of todos.
   * @returns {void}
   */
  app.get("/todos", isAuthenticated, getTodos);

  /**
   * Route to update an existing todo item.
   *
   * @name PUT /todos/:id
   * @function
   * @memberof module:routes
   * @param {Request} req - The Express Request object containing the todo ID and updated details.
   * @param {Response} res - The Express Response object for sending the result of the update.
   * @returns {void}
   */
  app.put("/todos/:id", isAuthenticated, validateTodo, editTodo);

  /**
   * Route to delete a todo item by ID.
   *
   * @name DELETE /todos/:id
   * @function
   * @memberof module:routes
   * @param {Request} req - The Express Request object containing the todo ID to be deleted.
   * @param {Response} res - The Express Response object for sending the result of the deletion.
   * @returns {void}
   */
  app.delete("/todos/:id", isAuthenticated, deleteTodo);

  app.get('/user', isAuthenticated,
  function(req, res) {
      res.json({
        success: true, // or something to indicate to the frontend that you've identified the user
        message: "user is authenticated"
      });
    }
  );

};

export { routes };
