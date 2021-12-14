import { Mongoose, Schema, Document } from "mongoose";

export interface IMateria {
    name?: String;
    hours?: Number;
    createAt?: Date;
    updateAt?: Date;
}
export interface Materia extends Document{
    name: String;
    hours: Number;
    createAt: Date;
    updateAt: Date;
}
const materiaSchema = new Schema({
    name: {type: String, required: true},
    hours: {type: Number, required: true},
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date },
});
export const createModel  = (mongoose: Mongoose) => {
    return mongoose.model<Materia>("materia", materiaSchema);
}