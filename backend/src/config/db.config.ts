import mongoose  from 'mongoose';
import { logger } from './logger.config';
import * as dotenv from "dotenv";
dotenv.config();

export class DbConnection {

    public connect(): Promise<void> {
        mongoose.set('strictQuery', true);
        return mongoose
            .connect(process.env.URI)
            .then(() => {
                logger.info(`Connected to MongoDB`);
            })
            .catch((err) => {
                logger.error(`Connection Error: ${err}`);
                throw err;
            });
    }
}
