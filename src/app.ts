import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middleware/passport";
import todoAuth from "./routes/todo.route";
import Todo from "./models/TODO";
const app = express();

//initializations

//seting
app.set("port", process.env.PORT || 3000);

//midleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);
//routes
app.get("/", (req, res) => {
  res.send(`El api esta corriendo en http://localhost:${app.get("port")}`);
});

app.use(todoAuth);

export default app;
