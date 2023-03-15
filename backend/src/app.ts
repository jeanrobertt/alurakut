import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors, { CorsOptions } from "cors";
import userRoutes from "./routes";

const domains: String[] = ['http://localhost:8080', 'http://localhost:4200'];

var corsOptions : CorsOptions = {
    origin: function (origin, callback) {
        // bypass the requests with no origin (like curl requests, mobile apps, etc )
        if (!origin) return callback(null, true);

        if (!domains.includes(origin)) {
            let msg : string = `This site ${origin} does not have an access. Only specified domains are allowed to access it.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
};


const PORT: string | number = process.env.PORT || 8080;
const path = __dirname + '/views/'

const app: Express = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

app.use(userRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.mongodb.net/Alurakut?retryWrites=true&w=majority`;

mongoose
	.connect(uri)
	.then(() => {
		app.listen(PORT, () =>
			console.log(`Server is running on port ${PORT}`)
		);
	})
	.catch((err) => {
		console.log(`Connection Error: ${err}`);
	});

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path + "index.html");
});
