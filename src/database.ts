import Database from 'better-sqlite3';

const db = new Database('mydatabase.db', { verbose: console.log });

// Create a simple table if it doesn't exist
db.exec(`CREATE TABLE IF NOT EXISTS todo (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  task TEXT,
  completed INTEGER
)`);

export default db;
