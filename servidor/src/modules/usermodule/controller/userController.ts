import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { createModel, User } from "../model/UserModel";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
    private userRepository: UserRepository;
    constructor (mongoose: Mongoose) {
        this.userRepository = new UserRepository(createModel(mongoose));
    }
    //POST
    public async create (request: Request, response: Response) {
        //body
        let { name, lastname, email, password, type } = request.body;
        //cifrar el password importante
        const result = await this.userRepository.create({ name, lastname, email, password, type });
        response.status(201).json({ serverResponse: result });
    }
    public update (request: Request, response: Response) {}
    public async get (request: Request, response: Response) {
        const result = await this.userRepository.find({});
        response.status(201).json({ serverResponse: result });
    }
    public delete (request: Request, response: Response) {}
    public login (request: Request, response: Response) {}
    public singOut (request: Request, response: Response) {}
}
export default UserController;