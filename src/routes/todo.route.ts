import { Router } from "express";
import {
  getAll,
  insertTodo,
  getById,
  updateTodo
} from "../controllers/todo.controller";
const router = Router();

router.get("/api/todo", getAll);
router.get("/api/todo/:id", getById);
router.put("/api/todo/:id", updateTodo);
router.post("/api/todo", insertTodo);

export default router;
