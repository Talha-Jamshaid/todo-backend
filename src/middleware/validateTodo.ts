import { Request, Response, NextFunction } from "express";

/**
 * Middleware to validate the request body for creating and updating todo items.
 *
 * @param {Request} req - The Express Request object containing the request body.
 * @param {Response} res - The Express Response object used to send a response if validation fails.
 * @param {NextFunction} next - The Express NextFunction callback to pass control to the next middleware/handler.
 * @returns {void} Sends a 400 response if validation fails, otherwise proceeds to the next middleware/handler.
 */
const validateTodo = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { task, completed } = req.body;

  // Check if the task is a string and completed is a boolean
  if (typeof task !== "string" || typeof completed !== "boolean") {
    // Send a 400 response if validation fails
    res.status(400).send({
      success: false,
      message:
        "Invalid request body. 'task' must be a string and 'completed' must be a boolean.",
      data: false,
    });
  }

  // Proceed to the next middleware/handler if validation is successful
  next();
};

export { validateTodo };
