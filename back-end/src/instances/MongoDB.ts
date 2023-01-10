import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        console.log('conectando ao mongo...');
        await connect(process.env.MONGO_URL as string);
        console.log("conectado ao banco de dados")
    } catch (error) {
        console.log('Falha na conexão. Erro:', error)
    }
}