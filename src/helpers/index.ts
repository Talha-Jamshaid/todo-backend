/**
 * Generates a random string of a given length using alphanumeric characters.
 * 
 * @param {number} length - The length of the random string to generate.
 * @returns {string} A random string of the specified length.
 */
export const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

/**
 * Generates a random name from a predefined list of names.
 * 
 * @returns {string} A random name.
 */
export const generateRandomName = (): string => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hank'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

/**
 * Generates a random ID between 1 and 999.
 * 
 * @returns {number} A random ID between 1 and 999.
 */
export const generateRandomID = (): number => {
  return Math.floor(Math.random() * 999) + 1;
};
