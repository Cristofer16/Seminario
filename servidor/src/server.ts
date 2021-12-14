import App from "./App";
const application: App = new App();
application.getApp().listen(application.getPort(), () => {
    console.log(`Servidor corriendo en puerto ${application.getPort()}`);
});