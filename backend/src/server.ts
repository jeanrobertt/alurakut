import { logger } from "./config/logger.config";
import App from "./app";

try {  
    const app = new App();
    app.start();
} catch (error) {
    logger.error(error);
}