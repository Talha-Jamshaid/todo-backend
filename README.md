# Todo API

The API requires token-based authentication for accessing todo-related endpoints

## Overview

This project is an Express.js application that provides a RESTful API for managing todo items. It includes endpoints for generating authentication tokens and performing CRUD (Create, Read, Update, Delete) operations on todo items. The API requires token-based authentication for accessing todo-related endpoints.

## Features

- Generate authentication tokens.
- Create, read, update, and delete todo items.
- Token-based authentication for securing endpoints.

## Requirements

- Node.js v20.9.0
- npm (Node Package Manager)  10.1.0
- nodemon 3.1.0

## Installation

1. **Unzip the File**

   Extract the project files from the archive.

2. **Install Dependencies**

   Run the following command to install the required Node.js modules:

   ```bash
   npm install

3. **Start the Development Server**

    Run the following command to start server:

    ```bash
   npm run dev

4. **API Endpointss**
Base URL: http://localhost:3000
1) Login Endpoint

URL: /login
Method: POST
Description: Used for user login.
Request Example:
{
  "username": "example",
  "password": "password123"
}
Response Example:
{
  "success": true,
  "user":{
   "id": 123
   "name": "John"
  }
}

2) isAuthenticated Endpoint

URL: /user
Method: GET
Description: Check user is authenticated?.
Request Example: none
Response Example:
{
  "success": true,
  "message": "user is authenticated"
}

3) Generate Token Endpoint

URL: /generateToken
Method: POST
Description: get token ?.
Request Example: none
Response Example:
{
    "success": true,
    "message": "Token fetched successfully",
    "data": "73acXFpakZiUCh9GJCksKRcfTvV6t8fjyX8z8wIxEdeQi8MoGG"
}

4) Add todo Endpoint

URL: /todos
Method: POST
Description: Add todo item.
Request Example: {
    "task":"123",
    "completed":false
}
Response Example:
{
    "success": true,
    "message": "Todo created successfully",
    data: { id: 1 },
}

5) Edit todo Endpoint

URL: /todos/:id
Method: PUT
Description: Edit todo item.
Request Example: {
    "task":"123",
    "completed":false
}
Response Example:
{
   "success": true,
   "message": "Todo updated successfully",
   "data": { id: 1 },
}

6) Get todo Endpoint

URL: /todos
Method: GET
Description: Get todos item.
Request Example: none
Response Example:
{
   "success": true,
   "message": "Todos fetched successfully",
   "data": [
      {
         "id": 1,
         "task": "Some task"
         "completed" : false
      },
      {
         "id": 2,
         "task": "Some task"
         "completed" : false
      },
   ],
}

7) delete todo Endpoint

URL: /todos/:id
Method: DELETE
Description: delete todos item.
Request Example: none
Response Example:
{
   "success": true,
   "message": "Todo deleted successfully",
   "data": { id: 1 },
}


