import { Request, Response } from 'express';
import { generateRandomString } from '../helpers';

/**
 * Generates a token and sends it in the response.
 *
 * @param {Request} req - The Express Request object.
 * @param {Response} res - The Express Response object.
 * @returns {Promise<void>} A promise that resolves when the response is sent.
 */
export const generateToken = async (req: Request, res: Response): Promise<void> => {
  try {
    // Simulate token generation (replace with actual logic as needed)
    const token = generateRandomString(50);

    // Send the generated token in the response
    res.status(200).send({
      success: true,
      message: 'Token fetched successfully',
      data: token,
    });
  } catch (e) {
    // Handle errors by sending a 400 status code
    res.status(400).send({
      success: false,
      message: 'Error while fetching the token',
      data: false,
    });
  }
};
