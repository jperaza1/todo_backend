import { model, Schema, Document } from "mongoose";

const todoSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  tiempo: {
    type: Number,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date
  },
  estado: {
    type: String,
    required: true
  }
});

export default model("todo", todoSchema);
