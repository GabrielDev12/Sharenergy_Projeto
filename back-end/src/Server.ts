import express, { Request, Response }  from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors'
import apiRoutes from './routes/api'
import { mongoConnect } from './instances/MongoDB';
 
dotenv.config();

const server = express();
mongoConnect()
server.use(cors());

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes);

server.use((req:Request, res:Response)=>{
    res.status(404);
    res.json({error:'Endpoint não encontrado'})
})

server.listen(process.env.PORT)

export default server;
