import express,  {Application, Request, Response} from 'express';
import cors from 'cors';
import routesUsuario from  '../routes/usuario';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: String;

    constructor() {               
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log (`Aplicacion corriendo en el puerto ${this.port}`)
        })

    }

    routes(){
        
        this.app.get('/', (req: Request, res: Response) =>{
                res.json({
                    msg: 'Api Working'
                })
        })

         this.app.use('/api/usuarios', routesUsuario)
         
    }

    midlewares(){

        // El body

        this.app.use(express.json());

        // cors
        this.app.use(cors());

        this.app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "https://16.171.94.45"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
    }

    async dbConnect() {

        try{
            await db.authenticate();

            console.log ('Base de Datos Conectada');

        }catch (error){

            console.error ('Conexion rechazada');

        }

        
        
    }

}


export default Server;