// import bodyParser from 'body-parser';
// import express from 'express';
// import passport from 'passport';
// import session from 'express-session';
// import { Request, Response, NextFunction } from "express";
// import cors from 'cors'

// const app = express();
// app.use(cors())
// app.use(bodyParser.json()); //middleware to convert body on javascript object
// const port = process.env.PORT || 3000;

// var { routes } = require("./routes/routes");

// app.use(session({
//   secret: "secret",
//   resave: false,
//   saveUninitialized: true
// }))
// app.use(passport.initialize())
// app.use(passport.session())


// routes(app); //app routings


// app.post('/login', 
//   passport.authenticate('local'),
//   function(req, res) {
//     res.json({
//       success: true, // or something to indicate to the frontend that you've identified the user
//       user: req.user // or something (a token maybe what you'll use later)
//     });
//   }
// );

// // // Test route
// app.get('/test', (req: Request, res: Response) => {
//   res.json({ message: 'Test route works!' });
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { Request, Response, NextFunction } from "express";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true // Enable credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // Middleware to convert body on javascript object

var { routes } = require("./routes/routes");

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

routes(app); // App routings

app.post('/login', 
  passport.authenticate('local'),
  function(req, res) {
    res.json({
      success: true, // Or something to indicate to the frontend that you've identified the user
      user: req.user // Or something (a token maybe what you'll use later)
    });
  }
);

// Test route
app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Test route works!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
