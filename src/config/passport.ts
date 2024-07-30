import passport from "passport";
import passportLocal from "passport-local";
import { Request, Response, NextFunction } from "express";
import { generateRandomID, generateRandomName } from "../helpers";

const LocalStrategy = passportLocal.Strategy;
interface DoneFunction {
  (error: any, user?: any): void;
}


passport.use(new LocalStrategy(
  { usernameField: "username" },
  (email: string, password: string, done: DoneFunction) => {
    let authenticated_user = { id: generateRandomID(), name: generateRandomName() };
    return done(null , authenticated_user);
  }
));

passport.serializeUser( (userObj:any , done: DoneFunction) => {
  console.log("serialize user");
  done(null, userObj)
})

passport.deserializeUser((id: any, done: DoneFunction) => {
  console.log("deserialize user");
  done(null, id);
})

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({
      success: false,
      message: "unauthenticated user" 
    });
  };