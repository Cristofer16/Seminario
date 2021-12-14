import { Mongoose, Schema, Document } from "mongoose";

export interface IUser {
    name?: String;
    email?: String;
    password?: String;
    createAt?: Date;
    updateAt?: Date;
}
export interface User extends Document{
    name: String;
    email: String;
    password: String;
    createAt: Date;
    updateAt: Date;
}
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, validate: {
        validator: (v: string) => {
            return /^[\w\.]+@\w+[.][\w]{2,3}$/.test(v);
        },
        message: (props: any) => `${props.value} no ses un correo valido`,
    }},
    password: { type: String, required: true },
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date },
});
export const createModel  = (mongoose: Mongoose) => {
    return mongoose.model<User>("user", userSchema);
}