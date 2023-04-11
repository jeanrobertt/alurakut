import express, { Express, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import userRoutes from "./routes";
import { logger } from "./config/logger.config";
import { DbConnection } from "./config/db.config";
import corsConfig from "./config/cors.config";
import * as dotenv from "dotenv";
dotenv.config();

class App {
	private app: Express;
	private dbConnection: DbConnection;

	constructor() {
		this.app = express();
		this.app.set("port", Number(process.env.PORT));
		this.settupMiddlewares();
		this.setupRoutes();
		this.dbConnection = new DbConnection();
		logger.info("App is initialized");
		logger.info(`Port: ${this.app.get("port")}`);
	}

	private settupMiddlewares() {
		this.app.use(corsConfig());
		this.app.use(express.json());
		this.app.use(helmet());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(this.logRequest.bind(this));
	}

	private setupRoutes() {
		this.app.use("/api", userRoutes);
		this.app.use("/", (req: Request, res: Response) => {
			res.status(404).json({ message: "Route not found" });
			logger.warn(`Route not found: ${req.method} ${req.originalUrl}`);
		});
		this.app.use(this.errorHandler.bind(this));
	}

	private errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
		logger.error(err);
		res.status(500).json({ message: err.message });
		next();
	}

	private logRequest(req: Request, res: Response, next: NextFunction) {
		logger.info(
			`Received [${req.method}] request for [${req.originalUrl}] `
		);
		next();
	}

	start() {
		this.dbConnection
			.connect()
			.then(() => {
				this.app.listen(this.app.get("port"), () => {
					logger.info(
						`Server is running on port ${this.app.get("port")}`
					);
				});
			})
			.catch((error) => {
				logger.error(error);
			});
	}
}

export default App;