import { Request, Response } from "express";
import { Mongoose } from "mongoose";
import { createModel, Materia } from "../model/MateriaModel";
import { MateriaRepository } from "../repositories/MateriaRepository";

class MateriaController {
    private materiaRepository: MateriaRepository;
    constructor (mongoose: Mongoose) {
        this.materiaRepository = new MateriaRepository(createModel(mongoose));
    }
    //POST
    public async create (request: Request, response: Response) {
        //body
        let { name, hours } = request.body;
        //cifrar el password importante
        const result = await this.materiaRepository.create({ name, hours });
        response.status(201).json({ serverResponse: result });
    }
    public update (request: Request, response: Response) {}
    public async get (request: Request, response: Response) {
        const result = await this.materiaRepository.find({});
        response.status(201).json({ serverResponse: result });
    }
    public delete (request: Request, response: Response) {}
    public login (request: Request, response: Response) {}
    public singOut (request: Request, response: Response) {}
}
export default MateriaController;