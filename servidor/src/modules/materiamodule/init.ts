import App from "../../App";
import Routes from "./routes";
class MateriaModule {
    constructor(routePath: string, app: App) {
        console.log("Modulo de materias cargado");
        const routes: Routes = new Routes(routePath, app);
    }
}
export default MateriaModule;