import { Injectable, NestMiddleware, Logger } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as fs from 'fs';
import * as path from 'path';
import returnDate from "./getDate";

@Injectable()
export class LoggerMiddleware implements NestMiddleware { // Crea middleware Logger con la interfaz NestMiddleware
    // Crea un nuevo middleware que registre todas las peticiones HTTP
    private logger = new Logger('HTTP');
    // Obtiene la petición del cliente, la respouesta y la función next para pasar al proximo middleware (si existe otro)
    use(req: Request, res: Response, next: NextFunction){
        // Obtiene metodo HTTP utilizado y ruta accedida por el cliente
        const { method, originalUrl } = req;
        // Obtiene el tiempo en milisegundos para luego calcular la duración de la peticion
        const start = Date.now();
        // define las acciones a realizar una vez finalizada la consulta
        res.on('finish', () => {
            // Obtiene el código según el resultado de la petición
            const { statusCode} = res;
            // Calcula la duración de la consulta restando la fecha actual en ms y la obtenida previamente
            const duration = Date.now() - start;
            // Obtiene la fecha en formato DD/MM/YYYY, HH:MM:SS de la función returnDate
            const fecha = returnDate()
            // Crea el mensaje de para el archivo Log
            const logText = `${method} ${originalUrl} ${statusCode} - ${duration}ms`
            // Define el path del archivo log, llamado appLog.log
            const logFileRoute = path.join(__dirname,'..', 'logs', 'appLog.log');
            // Habilita el texto de log por la terminal
            this.logger.log(logText);
            // Antes de crear el archivo de registro, comprueba si el archivo existe con el metodo existsSync de fs
            if(!fs.existsSync(path.dirname(logFileRoute))){
                // En caso de no existir, lo crea con mkdirSync
                fs.mkdirSync(path.dirname(logFileRoute), { recursive: true })
            }
            // Ingresa la linea con el texto log, la fecha y la hora en el archivo con el metodo appendFile
            fs.appendFile(logFileRoute, `${fecha} - ${logText}\n`, (err) => {
                if (err) {
                    // Si hubo un error al escribir en el archivo, lo mostrará por la terminal de Nest
                    this.logger.log(`Error escribiendo registro: ${err}`)
                }
            })
        });
        next();
    }
}