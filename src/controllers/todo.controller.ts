import { Request, Response } from "express";
import Todo from "../models/TODO";

export const getAll = async (req: Request, res: Response) => {
  const todos = await Todo.find();
  return res.status(200).send(todos);
};

export const getById = async (req: Request, res: Response) => {
  let id = req.params.id;

  let todo = await Todo.findById(id).catch(err => {
    return res.status(400).json("Error");
  });

  return res.status(200).json(todo);
};

export const insertTodo = async (req: Request, res: Response) => {
  if (
    !req.body.descripcion ||
    !req.body.tiempo ||
    !req.body.valor ||
    !req.body.estado
  ) {
    return res.status(400).send("Campos Requeridos");
  }

  console.log(req.body.fecha);

  let todo = {
    descripcion: req.body.descripcion,
    tiempo: req.body.tiempo,
    valor: req.body.valor,
    fecha: req.body.fecha,
    estado: req.body.estado
  };

  const Newtodo = new Todo(todo);
  console.log(Newtodo);
  await Newtodo.save();
  return res.status(200).send("Tarea Guardada exitosamente");
};

export const updateTodo = async (req: Request, res: Response) => {
  if (!req.body.estado) {
    return res.status(400).send("Campos Requeridos");
  }

  let id = req.params.id;

  await Todo.findByIdAndUpdate({ _id: id }, { estado: req.body.estado })
    .catch(err => {
      return res.status(400).json(err.message);
    })
    .then(resl => {
      return res.status(200).send("Estado cambiado");
    });
};
