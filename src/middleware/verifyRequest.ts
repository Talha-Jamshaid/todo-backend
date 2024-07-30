import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

/**
 * Middleware to verify the presence of an authentication token in the request header.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @param {NextFunction} next - The Express NextFunction callback.
 * @returns {void} Sends a 400 response if the token is missing, otherwise proceeds to the next middleware/handler.
 */
const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("x-auth");

  // Check if the token is present
  if (!token) {
    // Send a 400 response if the token is missing
    res.status(400).send({
      success: false,
      message: "You are not authorized to make this request",
      data: false,
    });
  } else {
    // Compare the token with the one stored in the .env file
    if (token === process.env.AUTH_TOKEN) {
      // Proceed to the next middleware/handler if the token is valid
      next();
    } else {
      // Send a 403 response if the token is invalid
      res.status(400).send({
        success: false,
        message: "Invalid token",
        data: false,
      });
    }
  }
};

export { verifyToken };
