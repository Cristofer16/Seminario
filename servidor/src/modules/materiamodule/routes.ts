import App from "../../App";
import { Express, Request, Response } from "express";
import MateriaController from "./controller/materiaController";
class Routes {
    private rootPath: string;
    private mainApp: App;
    private app: Express;
    private materiaController: MateriaController;
    constructor(rootPath: string, mainApp: App) {
        this.rootPath = rootPath;
        this.mainApp = mainApp;
        this.app = this.mainApp.getApp();

        this.materiaController = new MateriaController(mainApp.getClientMongo());
        
        this.configureRoutes();
    }
    private configureRoutes(){
        this.app.route(`${this.rootPath}/`).post((request: Request, response: Response) =>{
            this.materiaController.create(request, response);
        });
        this.app.route(`${this.rootPath}/`).get((request: Request, response: Response) => {
            this.materiaController.get(request, response);
        });
    }
}
export default Routes;